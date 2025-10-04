import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const FILES = []

function walk(dir) {
    for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, d.name)
        if (d.isDirectory()) walk(full)
        else if (/\.(jsx?|tsx?)$/.test(d.name)) FILES.push(full)
    }
}
walk(ROOT)

const patterns = [
    { re: /@sanity\/desk-tool|part:@sanity\/desk-tool/gi, msg: 'Use structureTool from "sanity/structure" (v4).' },
    { re: /part:@sanity\//gi, msg: 'Legacy parts API detected. Replace with v4 plugins/APIs.' },
    { re: /sanity\/desk['"]/gi, msg: 'Old desk import → use "sanity/structure".' },
    { re: /SANITY_STUDIO_TOKEN|SANITY_STUDIO_API_/g, msg: 'Studio env vars in app code; keep tokens server-only.' }
]

const hits = []
for (const f of FILES) {
    const src = fs.readFileSync(f, 'utf8')
    patterns.forEach(p => { if (p.re.test(src)) hits.push({ file: f, msg: p.msg }) })
}

if (hits.length) {
    console.log('\nPotential upgrade issues:')
    hits.forEach(h => console.log(' -', path.relative(ROOT, h.file), '→', h.msg))
} else {
    console.log('No obvious v3→v4 leftovers detected.')
}
