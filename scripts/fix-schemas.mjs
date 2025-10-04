import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const SCHEMAS_DIR = path.join(ROOT, 'schemas')

// best-effort string helpers (kept intentionally simple)
const hasImport = (src) => /from\s+['"]sanity['"]/.test(src)
const addImport = (src) => {
    if (hasImport(src)) return src
    return `import {defineType, defineField} from 'sanity'\n${src}`
}

const ensureDefineType = (src) => {
    // if already using defineType somewhere, keep it
    if (/defineType\s*\(/.test(src)) return src

    // wrap default export object
    if (/export\s+default\s+{/.test(src)) {
        return src.replace(/export\s+default\s+{/, 'export default defineType({')
    }
    // wrap named export object: export const X = { ... }
    return src.replace(/export\s+const\s+(\w+)\s*=\s*{/, 'export const $1 = defineType({')
}

const ensureDefineField = (src) => {
    // this doesn't rewrite every field; it’s fine if schemas already use plain objects
    // we only ensure an import exists; Studio accepts either shape.
    return src
}

const injectSlugIfMissing = (src) => {
    // Only if looks like a page/landing schema AND fields: [ ... ] exists AND no slug field.
    if (!/(name:\s*['"].*page.*['"]|name:\s*['"].*landing.*['"])/i.test(src)) return src
    if (!/fields\s*:\s*\[/m.test(src)) return src
    if (/name:\s*['"]slug['"]\s*,\s*type:\s*['"]slug['"]/.test(src)) return src

    return src.replace(/fields\s*:\s*\[/m, `fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required()
    }),`)
}

const removeLegacyParts = (src) =>
    src.replace(/part:@sanity\/[^\n'"]+['"];?/g, '').replace(/@sanity\/desk-tool/g, 'sanity/structure')

function fixFile(file) {
    let src = fs.readFileSync(file, 'utf8')
    const before = src

    src = removeLegacyParts(src)
    src = addImport(src)
    src = ensureDefineType(src)
    src = ensureDefineField(src)
    src = injectSlugIfMissing(src)

    if (src !== before) {
        fs.writeFileSync(file, src, 'utf8')
        console.log('fixed:', path.relative(ROOT, file))
    }
}

function walk(dir) {
    for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, d.name)
        if (d.isDirectory()) walk(full)
        else if (/\.(jsx?|tsx?)$/.test(d.name) && d.name !== 'index.js') fixFile(full)
    }
}

walk(SCHEMAS_DIR)
console.log('Done.')
