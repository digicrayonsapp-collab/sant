import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = process.cwd()
const SCHEMAS_DIR = path.join(ROOT, 'schemas')

async function importRegistry() {
    const p = path.join(SCHEMAS_DIR, 'index.js')
    const mod = await import(pathToFileURL(p))
    const list = mod.schemaTypes || mod.default
    if (!Array.isArray(list)) {
        throw new Error(`schemas/index.js must export {schemaTypes: any[]} or default array`)
    }
    return list
}

const isDoc = (t) => t?.type === 'document'
const isObj = (t) => t?.type === 'object'
const isArr = (t) => t?.type === 'array'

async function main() {
    const list = await importRegistry()
    const errors = []
    const warnings = []
    const names = new Map()

    list.forEach((t, i) => {
        if (!t || typeof t !== 'object') { errors.push(`schemaTypes[${i}] is not an object`); return }
        if (!t.name) { errors.push(`schemaTypes[${i}] missing "name"`); return }
        if (!t.type) { errors.push(`"${t.name}" missing "type"`); return }
        if (!isDoc(t) && !isObj(t) && !isArr(t)) { errors.push(`"${t.name}" has unexpected type "${t.type}"`) }
        if ((isDoc(t) || isObj(t)) && !Array.isArray(t.fields)) { errors.push(`"${t.name}" missing fields[]`) }

        const prev = names.get(t.name)
        if (prev != null) errors.push(`Duplicate schema name "${t.name}" at ${i} (prev ${prev})`)
        else names.set(t.name, i)

        if (isDoc(t) && /page|landing/i.test(t.name)) {
            const slug = t.fields?.find(f => f?.name === 'slug' && f?.type === 'slug')
            if (!slug) warnings.push(`Doc "${t.name}" has no slug field`)
            else if (typeof slug.validation !== 'function') warnings.push(`Doc "${t.name}" slug has no validation`)
        }
    })

    // warn about schema files not registered
    const files = []
    const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
        const full = path.join(dir, d.name)
        if (d.isDirectory()) walk(full)
        else if (/\.(jsx?|tsx?)$/.test(d.name)) files.push(full)
    })
    walk(SCHEMAS_DIR)

    const registered = new Set(list.map(s => s?.name).filter(Boolean))
    const unused = []
    for (const f of files) {
        const src = fs.readFileSync(f, 'utf8')
        if (!/defineType\s*\(|type:\s*['"](document|object|array)['"]/.test(src)) continue
        const m = src.match(/name:\s*['"]([^'"]+)['"]/)
        if (m && !registered.has(m[1])) unused.push(`${path.relative(ROOT, f)} (name: ${m[1]})`)
    }
    if (unused.length) warnings.push(...unused.map(s => `Schema not registered in schemas/index.js -> ${s}`))

    if (errors.length) {
        console.error('\nSchema errors:\n- ' + errors.join('\n- '))
        process.exit(1)
    } else {
        console.log(`OK: ${list.length} schema types, unique + well-formed.`)
    }
    if (warnings.length) console.warn('\nSchema warnings:\n- ' + warnings.join('\n- '))
}

main().catch(e => { console.error(e); process.exit(1) })
