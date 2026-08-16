import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const CONTENT_FILES = [
  'messages/en.json',
  'messages/fr.json',
  'content/projects/en.json',
  'content/projects/fr.json',
  'content/publications/en.json',
  'content/publications/fr.json',
]

function tsxFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return tsxFiles(path)
    return entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') ? [path] : []
  })
}

const FILES = [...CONTENT_FILES, ...tsxFiles('src')]

const FORBIDDEN = [
  { re: /(chair|editor|working group|task force)[^.]{0,50}trust over ip/i, why: 'Membership only, no working group or task force yet' },
  { re: /trust over ip[^.]{0,50}(chair|editor|working group|task force)/i, why: 'Membership only, no working group or task force yet' },
  { re: /sybil/i, why: 'Outdated research framing' },
  { re: /face10ai/i, why: 'Dropped from the CV' },
  { re: /RNCP (Level|niveau) 7/i, why: 'It is RNCP 6, code RNCP37873' },
  { re: /Modern Web Development with Next/i, why: 'Talk was a placeholder, never given' },
  { re: /Développement web moderne avec Next/i, why: 'Talk was a placeholder, never given' },
  { re: /—/, why: 'Em dash, use a comma' },
]

function flatten(value, prefix = '') {
  const out = new Map()
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (child && typeof child === 'object' && !Array.isArray(child)) {
      for (const [k, v] of flatten(child, path)) out.set(k, v)
    } else {
      out.set(path, child)
    }
  }
  return out
}

const failures = []

for (const file of FILES) {
  const raw = readFileSync(file, 'utf8')
  for (const { re, why } of FORBIDDEN) {
    for (const [index, line] of raw.split('\n').entries()) {
      if (re.test(line)) {
        failures.push(`${file}:${index + 1}  ${why}\n    ${line.trim()}`)
      }
    }
  }
}

for (const pair of [['messages/en.json', 'messages/fr.json']]) {
  const [en, fr] = pair.map((f) => flatten(JSON.parse(readFileSync(f, 'utf8'))))
  for (const key of en.keys()) {
    if (!fr.has(key)) failures.push(`${pair[1]}  missing key present in EN: ${key}`)
  }
  for (const key of fr.keys()) {
    if (!en.has(key)) failures.push(`${pair[0]}  missing key present in FR: ${key}`)
  }
}

if (failures.length > 0) {
  console.error(`content check failed, ${failures.length} problem(s):\n`)
  for (const f of failures) console.error(`  ${f}\n`)
  process.exit(1)
}

console.log('content check passed')
