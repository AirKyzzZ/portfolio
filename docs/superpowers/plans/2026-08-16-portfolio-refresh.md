# Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring maximemansiet.fr in line with the actual work, delete three false claims, and leave the site ready to be indexed.

**Architecture:** Content-first refresh of an existing static Next.js 15 App Router site with next-intl. Copy lives in `messages/{en,fr}.json` and `content/**/*.json`; page components read it. A repeatable `scripts/check-content.mjs` gate replaces unit tests as the pass/fail signal, checking locale key parity, forbidden claims, and em dashes. Three false claims are removed in Task 1 before anything else lands.

**Tech Stack:** Next.js 15.4.3 (App Router, static export), React 19, next-intl 4.8, Tailwind 4, MDX via next-mdx-remote, Netlify.

**Spec:** `docs/superpowers/specs/2026-08-15-portfolio-refresh-design.md`

## Global Constraints

- **No em dashes anywhere in copy.** Use commas. Enforced by `scripts/check-content.mjs`.
- **Zero code comments** unless documenting a hidden constraint, non-obvious invariant, upstream-bug workaround, or genuinely surprising platform behaviour.
- **EN and FR must have identical key sets** at all times. Every message edit is bilingual in the same commit.
- **Every number in copy traces to the spec's "Verified source data" section.** Not to LinkedIn, which is stale.
- Files kebab-case, components PascalCase, named exports, TypeScript strict, never `any`.
- Conventional commits, subject line only, no body.
- **Do not claim W3C CCG or ToIP membership.** Not until Maxime confirms he is in.
- **Do not mention `verana-mcp` anywhere.** It is not an official Verana project.
- SWIYU is always described with its blocker intact. Planned-but-unshipped wallets (walt.id, MultiPaz, wwWallet, BC Wallet, iGrant, Yivi) are never claimed.

---

### Task 1: Content check script and removal of the three false claims

The site currently states that Maxime joined the Trust over IP Foundation (he was never accepted), advertises a GDG Bordeaux talk he never gave, and claims an RNCP Level 7 title when it is Level 6. These go first, before any other work.

**Files:**
- Create: `scripts/check-content.mjs`
- Modify: `package.json` (add `check:content` script)
- Modify: `messages/en.json`, `messages/fr.json`
- Modify: `src/app/[locale]/page.tsx`

**Interfaces:**
- Consumes: nothing.
- Produces: `npm run check:content`, exit 0 on pass and 1 on failure. Every later task runs it. Its `FORBIDDEN` array is extended by later tasks.

- [ ] **Step 1: Write the check script**

Create `scripts/check-content.mjs`:

```js
import { readFileSync } from 'node:fs'

const FILES = [
  'messages/en.json',
  'messages/fr.json',
  'content/projects/en.json',
  'content/projects/fr.json',
  'content/publications/en.json',
  'content/publications/fr.json',
]

const FORBIDDEN = [
  { re: /trust over ip/i, why: 'Membership was never granted' },
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
```

- [ ] **Step 2: Register the script**

In `package.json`, add to `"scripts"`:

```json
"check:content": "node scripts/check-content.mjs"
```

- [ ] **Step 3: Run it and watch it fail**

Run: `npm run check:content`

Expected: FAIL. It should report the Trust over IP sentence in `home.bio4` (both locales), the `talks.talk1title` placeholder, the RNCP Level 7 string in `cv.edu1desc`, the `Sybil` mention in `content/projects/*.json`, `Face10ai` in `cv.proj1desc`, and a set of em dashes across `research.area3desc`, `common.noContent` and several project descriptions.

- [ ] **Step 4: Delete the ToIP claim**

In `messages/en.json`, replace the whole `home.bio4` value with the version that keeps the conviction and the age but drops the false affiliation:

```
"bio4": "I'm 20. I've bet everything on decentralized identity being one of the foundational problems of the next era, for people and for the agents acting on their behalf."
```

In `messages/fr.json`:

```
"bio4": "J'ai 20 ans. J'ai tout misé sur l'identité décentralisée, l'un des problèmes fondateurs de la prochaine ère, pour les humains comme pour les agents qui agissent en leur nom."
```

Task 3 rewrites this paragraph properly. This step only removes the false statement.

- [ ] **Step 5: Replace the placeholder talk with GDC Geneva**

The talks page maps over a single hardcoded entry, so the keys are reused rather than deleted, which keeps the page rendering.

In `messages/en.json`, `talks`:

```json
"talk1title": "Cross-ecosystem trust for digital identity wallets",
"talk1venue": "Global Digital Collaboration Conference (GDC26), Palexpo Geneva",
"talk1date": "1-3 September 2026",
"talk1desc": "Co-speaking with Fabrice Rochette and Ariel Gentile for 2060.io on our Global Digital Trust Collaboration Award work: wiring live trust-registry resolution into eight third-party identity wallets. Session details to be confirmed."
```

In `messages/fr.json`:

```json
"talk1title": "Confiance inter-écosystèmes pour les portefeuilles d'identité numérique",
"talk1venue": "Global Digital Collaboration Conference (GDC26), Palexpo Genève",
"talk1date": "1-3 septembre 2026",
"talk1desc": "Intervention conjointe avec Fabrice Rochette et Ariel Gentile pour 2060.io sur nos travaux pour le Global Digital Trust Collaboration Award : l'intégration d'une résolution de confiance en direct dans huit portefeuilles d'identité tiers. Détails de la session à confirmer."
```

- [ ] **Step 6: Delete the matching fake news item**

`home.news4` and `home.news4date` announce the same talk. Remove both keys from `messages/en.json` and `messages/fr.json`.

In `src/app/[locale]/page.tsx`, delete this line from the News section:

```tsx
<NewsItem date={t('news4date')}>{t('news4')}</NewsItem>
```

- [ ] **Step 7: Correct the RNCP level**

In `messages/en.json`, `cv.edu1desc`:

```
"edu1desc": "Five-year software engineering programme. Currently working toward the RNCP 6 title Concepteur Développeur d'Applications (RNCP37873), September 2026 to September 2027. BTS SIO SLAM completed June 2026."
```

In `messages/fr.json`:

```
"edu1desc": "Cursus d'ingénierie logicielle en cinq ans. Actuellement en préparation du titre RNCP 6 Concepteur Développeur d'Applications (RNCP37873), de septembre 2026 à septembre 2027. BTS SIO SLAM obtenu en juin 2026."
```

Also change `cv.edu1title` from "Engineering Degree in Computer Science" to "Computer Science Engineering Programme" in EN, and to "Cursus d'ingénierie informatique" in FR, so the title does not imply a completed degree.

- [ ] **Step 8: Clear the remaining flagged strings**

Remove `Face10ai` from `cv.proj1desc` and the `Sybil` sentence from the `credat` entry in `content/projects/en.json` and `content/projects/fr.json`. Replace every em dash the script reported with a comma, in both locales and both content files. Tasks 3 to 6 rewrite most of these values wholesale; here the goal is only to get the gate green.

- [ ] **Step 9: Run the check and the build**

Run: `npm run check:content && npm run build`

Expected: `content check passed`, then a clean build.

- [ ] **Step 10: Commit**

```bash
git add scripts/check-content.mjs package.json messages content src
git commit -m "fix: remove unfounded ToIP, talk and RNCP claims"
```

---

### Task 2: Move list content from numbered keys to arrays

`page.tsx`, `cv/page.tsx` and `research/page.tsx` each hardcode fixed-length arrays of `t('news1')`, `t('exp1title')`, `t('area1desc')` and so on. Adding a news item or a job currently requires a code change, which is a large part of why the site went six months stale. The refresh adds nine news items, five experience entries and four languages, so this is the moment to fix it.

`next-intl` exposes `t.raw(key)` which returns the raw JSON value, arrays included.

**Files:**
- Modify: `src/app/[locale]/page.tsx`, `src/app/[locale]/cv/page.tsx`, `src/app/[locale]/research/page.tsx`, `src/app/[locale]/talks/page.tsx`
- Modify: `messages/en.json`, `messages/fr.json`
- Create: `src/types/content.ts`

**Interfaces:**
- Consumes: `npm run check:content` from Task 1.
- Produces: message shapes that Tasks 3 to 6 write into.
  - `home.newsItems`: `Array<{ date: string; text: string }>` (the key `home.news` already holds the section heading string and keeps that meaning)
  - `home.interests`: `string[]`
  - `research.areas`: `Array<{ id: string; title: string; body: string }>`
  - `research.questions`: `string[]`
  - `cv.experience`: `Array<{ title: string; company: string; period: string; desc: string }>`
  - `cv.education`: `Array<{ title: string; school: string; period: string; desc: string }>`
  - `cv.skills`: `string[]`, `cv.languages`: `string[]`
  - `cv.engagement`: `Array<{ title: string; desc: string }>`
  - `talks.items`: `Array<{ title: string; venue: string; date: string; desc: string }>`

- [ ] **Step 1: Declare the shapes**

Create `src/types/content.ts`:

```ts
export type NewsEntry = {
  date: string
  text: string
}

export type ResearchArea = {
  id: string
  title: string
  body: string
}

export type CvEntry = {
  title: string
  company: string
  period: string
  desc: string
}

export type EducationEntry = {
  title: string
  school: string
  period: string
  desc: string
}

export type EngagementEntry = {
  title: string
  desc: string
}

export type TalkEntry = {
  title: string
  venue: string
  date: string
  desc: string
}
```

- [ ] **Step 2: Convert the message files**

In both `messages/en.json` and `messages/fr.json`, restructure. Keep the existing text values, only change the shape. `home` becomes:

```json
"home": {
  "about": "About",
  "bio1": "...",
  "bio2": "...",
  "bio3": "...",
  "bio4": "...",
  "researchInterests": "Research Interests",
  "interests": ["...", "...", "...", "...", "..."],
  "news": "News",
  "newsItems": [
    { "date": "2026.02", "text": "..." }
  ]
}
```

Carry `bio5`'s parkour text into `bio4` position order later; Task 3 rewrites all bio keys, so here just ensure `bio1` to `bio5` still exist and `interest1` to `interest5` become `interests`, `news1` to `news6` become `newsItems`, minus the `news4` pair already deleted.

Apply the same treatment to `research` (`areas`, `questions`), `cv` (`experience`, `education`, `skills`, `languages`, `engagement`) and `talks` (`items`).

- [ ] **Step 3: Read arrays in the home page**

In `src/app/[locale]/page.tsx`, replace the interests list and the News block:

```tsx
import type { NewsEntry } from '@/types/content'

const interests = t.raw('interests') as string[]
const newsItems = t.raw('newsItems') as NewsEntry[]
```

```tsx
<ul className="space-y-1.5 text-sm text-foreground-secondary">
  {interests.map((interest) => (
    <li key={interest}>• {interest}</li>
  ))}
</ul>
```

```tsx
<div className="space-y-2">
  {newsItems.map((item) => (
    <NewsItem key={item.text} date={item.date}>{item.text}</NewsItem>
  ))}
</div>
```

- [ ] **Step 4: Read arrays in the CV, research and talks pages**

In `src/app/[locale]/cv/page.tsx`, replace the five hardcoded arrays:

```tsx
import type { CvEntry, EducationEntry, EngagementEntry } from '@/types/content'

const experiences = t.raw('experience') as CvEntry[]
const education = t.raw('education') as EducationEntry[]
const skills = t.raw('skills') as string[]
const languages = t.raw('languages') as string[]
const projects = t.raw('engagement') as EngagementEntry[]
```

In `src/app/[locale]/research/page.tsx`:

```tsx
import type { ResearchArea } from '@/types/content'

const areas = t.raw('areas') as ResearchArea[]
const questions = t.raw('questions') as string[]
```

and give each rendered section its anchor so `/research/#interop` resolves:

```tsx
<section key={area.id} id={area.id} className="scroll-mt-8">
```

In `src/app/[locale]/talks/page.tsx`:

```tsx
import type { TalkEntry } from '@/types/content'

const talks = t.raw('items') as TalkEntry[]
```

- [ ] **Step 5: Verify nothing changed visually**

Run: `npm run check:content && npm run build`

Expected: check passes, build clean. The rendered output should be byte-identical in content to before this task, since only the shape changed.

- [ ] **Step 6: Commit**

```bash
git add src messages
git commit -m "refactor(i18n): read list content from arrays instead of numbered keys"
```

---

### Task 3: Rewrite the homepage

**Files:**
- Modify: `messages/en.json`, `messages/fr.json` (`home` namespace)
- Modify: `src/app/[locale]/page.tsx` (bio paragraph count drops from five to four)

**Interfaces:**
- Consumes: `home.interests`, `home.newsItems` shapes from Task 2.
- Produces: nothing later tasks depend on.

- [ ] **Step 1: Rewrite the bio, EN**

Replace `bio1` to `bio5` with four keys, `bio1` to `bio4`, and delete `bio5`:

```json
"bio1": "I'm a software engineer working on self-sovereign identity, based in Bordeaux. I fell into computer science young and never left, drawn by the idea that code isn't just tooling, it's infrastructure for society. That curiosity led me to distributed systems, cryptography, and eventually to the question I keep coming back to: how do we establish trust without a central authority?",
"bio2": "I build that at 2060.io, on Verana, an open trust layer for the internet. 182 merged pull requests since February 2026, across the trust registry frontend, spec-compliant credential tooling, and the resolver work that lets a verifier ask a live question instead of trusting a static list. This year I wired Verana trust resolution into eight third-party identity wallets, among them the EUDI reference wallet, MOSIP's Inji, Talao, Sphereon, Paradym and Procivis One. Every one of them shipped with a hardcoded list of issuers it trusts. Replacing that list with a live, fail-closed call is the whole idea.",
"bio3": "The same problem is arriving for AI agents, faster. I wrote Credat, an open-source library that gives agents verifiable identities and scoped delegation, and co-authored a protocol showing that two previously unknown agents can establish mutual cryptographic trust in two round trips, with under 2ms of overhead. I'm 20, and I've bet everything on decentralized identity being one of the foundational problems of the next era, for people and for the agents acting on their behalf.",
"bio4": "Before tech, I trained as a competitive parkour athlete with the French Gymnastics Federation from 2017 to 2025. In 2025 I co-founded PKBA, now the largest parkour club in southwestern France. Discipline, pattern recognition, and learning from failure fast: sport and systems thinking have more in common than they appear."
```

- [ ] **Step 2: Rewrite the bio, FR**

```json
"bio1": "Je suis ingénieur logiciel, spécialisé en identité auto-souveraine, basé à Bordeaux. Je suis tombé dans l'informatique très jeune et je n'en suis jamais sorti, porté par l'idée que le code n'est pas qu'un outil, c'est une infrastructure de société. Cette curiosité m'a mené aux systèmes distribués, à la cryptographie, puis à la question qui me retient depuis : comment établir la confiance sans autorité centrale ?",
"bio2": "C'est ce que je construis chez 2060.io, sur Verana, une couche de confiance ouverte pour l'internet. 182 pull requests fusionnées depuis février 2026, sur le frontend du registre de confiance, l'outillage de credentials conforme aux specs, et le résolveur qui permet à un vérifieur de poser une question en direct plutôt que de se fier à une liste figée. Cette année, j'ai intégré la résolution de confiance Verana dans huit portefeuilles d'identité tiers, dont le portefeuille de référence EUDI, Inji de MOSIP, Talao, Sphereon, Paradym et Procivis One. Tous embarquaient une liste d'émetteurs de confiance codée en dur. Remplacer cette liste par un appel en direct, fail-closed, c'est toute l'idée.",
"bio3": "Le même problème arrive pour les agents IA, plus vite encore. J'ai écrit Credat, une bibliothèque open source qui donne aux agents une identité vérifiable et une délégation à portée limitée, et co-signé un protocole montrant que deux agents qui ne se connaissent pas peuvent établir une confiance cryptographique mutuelle en deux allers-retours, avec moins de 2 ms de surcoût. J'ai 20 ans, et j'ai tout misé sur l'identité décentralisée, l'un des problèmes fondateurs de la prochaine ère, pour les humains comme pour les agents qui agissent en leur nom.",
"bio4": "Avant la tech, j'ai été athlète de parkour en compétition à la Fédération Française de Gymnastique, de 2017 à 2025. En 2025, j'ai cofondé PKBA, aujourd'hui le plus grand club de parkour du Sud-Ouest. Discipline, reconnaissance de motifs, apprendre vite de ses échecs : le sport et la pensée systèmes ont plus en commun qu'il n'y paraît."
```

- [ ] **Step 3: Drop the fifth paragraph from the render**

In `src/app/[locale]/page.tsx`, the About section renders `bio1` through `bio5`. Remove the `bio5` line so it renders `bio1` to `bio4`.

- [ ] **Step 4: Replace research interests**

EN `home.interests`:

```json
"interests": [
  "Trust Registries & the Trust Registry Query Protocol",
  "Cross-Ecosystem Wallet Interoperability",
  "Agent Identity, Delegation & Scoped Authorization",
  "Credential Exchange Protocols (OID4VP, OID4VCI, SD-JWT VC)",
  "Trust Frameworks & Governance Models"
]
```

FR:

```json
"interests": [
  "Registres de confiance et Trust Registry Query Protocol",
  "Interopérabilité des portefeuilles entre écosystèmes",
  "Identité des agents, délégation et autorisations à portée limitée",
  "Protocoles d'échange de credentials (OID4VP, OID4VCI, SD-JWT VC)",
  "Cadres de confiance et modèles de gouvernance"
]
```

- [ ] **Step 5: Rebuild the news feed**

EN `home.newsItems`, newest first:

```json
"newsItems": [
  { "date": "2026.09", "text": "Co-speaking at Global Digital Collaboration (GDC26), Geneva, on cross-ecosystem wallet trust" },
  { "date": "2026.08", "text": "Shipped Verana trust resolution into eight third-party identity wallets, including the EUDI reference wallet and MOSIP's Inji" },
  { "date": "2026.08", "text": "First upstream contribution merged into credo-ts at the OpenWallet Foundation" },
  { "date": "2026.06", "text": "Co-founded CiteMe, generative engine optimization, as CTO" },
  { "date": "2026.03", "text": "Claw4S protocol paper accepted, agent-to-agent trust with did:key and Verifiable Credentials" },
  { "date": "2026.02", "text": "Published Credat, an open-source trust layer for AI agents using DIDs and VCs" },
  { "date": "2025.09", "text": "Joined 2060.io as a software engineer, building SSI infrastructure on Verana" },
  { "date": "2025.07", "text": "Co-founded PKBA, the largest parkour club in southwestern France" },
  { "date": "2025.04", "text": "Founded Klyx, a web development studio in Bordeaux" }
]
```

FR:

```json
"newsItems": [
  { "date": "2026.09", "text": "Intervention à Global Digital Collaboration (GDC26), Genève, sur la confiance inter-écosystèmes des portefeuilles" },
  { "date": "2026.08", "text": "Résolution de confiance Verana intégrée dans huit portefeuilles d'identité tiers, dont le portefeuille de référence EUDI et Inji de MOSIP" },
  { "date": "2026.08", "text": "Première contribution amont fusionnée dans credo-ts à l'OpenWallet Foundation" },
  { "date": "2026.06", "text": "Cofondation de CiteMe, generative engine optimization, en tant que CTO" },
  { "date": "2026.03", "text": "Papier du protocole Claw4S accepté, confiance entre agents avec did:key et Verifiable Credentials" },
  { "date": "2026.02", "text": "Publication de Credat, couche de confiance open source pour agents IA fondée sur DIDs et VCs" },
  { "date": "2025.09", "text": "Arrivée chez 2060.io comme ingénieur logiciel, infrastructure SSI sur Verana" },
  { "date": "2025.07", "text": "Cofondation de PKBA, le plus grand club de parkour du Sud-Ouest" },
  { "date": "2025.04", "text": "Création de Klyx, studio de développement web à Bordeaux" }
]
```

The CS50 news item is dropped; it is education, and it is already in the CV.

- [ ] **Step 6: Update the sidebar role line**

In `src/components/layout/sidebar.tsx`, change the role paragraph:

```tsx
<p className="text-sm text-foreground-secondary mt-1">
  {locale === 'fr' ? 'Ingénieur en identité auto-souveraine' : 'Self-Sovereign Identity Engineer'}
</p>
<p className="text-sm text-foreground-tertiary">
  2060.io / Verana
</p>
```

- [ ] **Step 7: Verify**

Run: `npm run check:content && npm run build`

Expected: both pass. Then `npx serve out` and confirm `/en/` and `/fr/` render four bio paragraphs, five interests and nine news items.

- [ ] **Step 8: Commit**

```bash
git add messages src
git commit -m "feat(home): rewrite bio, interests and news against verified work"
```

---

### Task 4: Rebuild the Research page evidence-first

Four survey-style "areas I study" become three sections that each lead with shipped work.

**Files:**
- Modify: `messages/en.json`, `messages/fr.json` (`research` namespace)

**Interfaces:**
- Consumes: `research.areas` (with `id`) and `research.questions` from Task 2.
- Produces: the `#interop` anchor, referenced by the group applications in Task 9.

- [ ] **Step 1: Rewrite the intro and areas, EN**

```json
"research": {
  "title": "Research",
  "intro": "I work on establishing trust between parties that share no authority. For people, and increasingly for the AI agents acting on their behalf. Everything below is work I have shipped or published, followed by the questions it left open.",
  "areas": [
    {
      "id": "interop",
      "title": "Cross-ecosystem trust interoperability",
      "body": "Every mature identity wallet ships a static list of issuers it trusts, compiled at build time and updated by release. I replaced that list with a live, fail-closed call to a trust registry in eight third-party wallets: the EUDI reference Android wallet, MOSIP's Inji, Talao AltMe, Sphereon, Paradym, Procivis One, SWIYU from the Swiss Confederation, and 2060.io's Hologram. MOSIP runs as a full issuer, wallet and verifier triangle; the EUDI reference wallet is validated on testnet against France Identité's Unfold playground. SWIYU is partial, its positive and control flows are accepted on Android but one verifier request path is still blocked. The integration surface everywhere is the same resolver HTTP API, which is what makes the approach portable rather than bespoke."
    },
    {
      "id": "trust-registries",
      "title": "Trust registries in production",
      "body": "Verana is a registry of trust registries: a public ledger recording which entities may issue or verify which credential schemas inside a given ecosystem, and the validation process that grants those permissions. I build the frontend and the credential tooling, including JSON Canonicalization Scheme canonicalization, full BCP-47 language tagging, and validation rules read from the chain rather than hardcoded. 182 merged pull requests since February 2026. The open standards counterpart is the Trust Registry Query Protocol, whose v2.0 is in public review at the Trust over IP Foundation."
    },
    {
      "id": "agent-trust",
      "title": "Agent identity and delegation",
      "body": "Autonomous agents raise the same question earlier and harder: when an agent calls a service, who is it, and who authorized it to act? Credat is my open-source answer, a TypeScript library giving agents verifiable identities via did:web and did:key, scoped delegation credentials, and a mutual trust handshake, with adapters for HTTP APIs, LangChain and the command line. The Claw4S protocol formalizes the handshake: two previously unknown agents reach mutual cryptographic trust in exactly two round trips, under 2ms of overhead, producing an auditable chain of signed credentials and a structural guarantee of impersonation detection."
    }
  ],
  "openQuestions": "Open Questions",
  "questions": [
    "Trust registries and ETSI trusted lists make different governance assumptions. Where exactly do they fail to meet, and what is the smallest bridge that preserves both?",
    "A live trust call is a network dependency. What is the correct behaviour when the registry is unreachable, and can fail-closed survive contact with real user expectations?",
    "How should a wallet surface a trust verdict to someone who has never heard of a trust registry, without either hiding the decision or overwhelming them?",
    "What revocation mechanisms preserve holder privacy while keeping a verifier's answer fresh enough to be worth asking for?"
  ]
}
```

- [ ] **Step 2: Rewrite the intro and areas, FR**

```json
"research": {
  "title": "Recherche",
  "intro": "Je travaille sur l'établissement de la confiance entre des parties qui ne partagent aucune autorité. Pour les humains, et de plus en plus pour les agents IA qui agissent en leur nom. Tout ce qui suit correspond à des travaux livrés ou publiés, suivis des questions qu'ils laissent ouvertes.",
  "areas": [
    {
      "id": "interop",
      "title": "Interopérabilité de la confiance entre écosystèmes",
      "body": "Tout portefeuille d'identité mature embarque une liste figée d'émetteurs de confiance, compilée au build et mise à jour par release. J'ai remplacé cette liste par un appel en direct, fail-closed, à un registre de confiance dans huit portefeuilles tiers : le portefeuille Android de référence EUDI, Inji de MOSIP, Talao AltMe, Sphereon, Paradym, Procivis One, SWIYU de la Confédération suisse, et Hologram de 2060.io. MOSIP tourne en triangle complet émetteur, portefeuille et vérifieur ; le portefeuille de référence EUDI est validé sur testnet face au playground Unfold de France Identité. SWIYU reste partiel : ses flux positifs et de contrôle sont acceptés sur Android, mais un chemin de requête vérifieur reste bloqué. La surface d'intégration est partout la même API HTTP de résolveur, ce qui rend l'approche portable plutôt que sur mesure."
    },
    {
      "id": "trust-registries",
      "title": "Registres de confiance en production",
      "body": "Verana est un registre de registres de confiance : un registre public qui enregistre quelles entités peuvent émettre ou vérifier quels schémas de credentials dans un écosystème donné, et le processus de validation qui accorde ces permissions. J'en construis le frontend et l'outillage de credentials, dont la canonicalisation JCS, l'étiquetage linguistique BCP-47 complet, et des règles de validation lues depuis la chaîne plutôt que codées en dur. 182 pull requests fusionnées depuis février 2026. Le pendant normatif est le Trust Registry Query Protocol, dont la v2.0 est en revue publique à la Trust over IP Foundation."
    },
    {
      "id": "agent-trust",
      "title": "Identité et délégation des agents",
      "body": "Les agents autonomes posent la même question plus tôt et plus durement : quand un agent appelle un service, qui est-il, et qui l'a autorisé à agir ? Credat est ma réponse open source, une bibliothèque TypeScript qui donne aux agents une identité vérifiable via did:web et did:key, des credentials de délégation à portée limitée, et une poignée de main de confiance mutuelle, avec des adaptateurs pour les API HTTP, LangChain et la ligne de commande. Le protocole Claw4S formalise cette poignée de main : deux agents qui ne se connaissent pas atteignent une confiance cryptographique mutuelle en exactement deux allers-retours, avec moins de 2 ms de surcoût, produisant une chaîne auditable de credentials signés et une garantie structurelle de détection d'usurpation."
    }
  ],
  "openQuestions": "Questions ouvertes",
  "questions": [
    "Les registres de confiance et les listes de confiance ETSI reposent sur des hypothèses de gouvernance différentes. Où exactement ne se rejoignent-ils pas, et quel est le plus petit pont qui préserve les deux ?",
    "Un appel de confiance en direct est une dépendance réseau. Quel est le comportement correct quand le registre est injoignable, et le fail-closed survit-il au contact des attentes réelles des utilisateurs ?",
    "Comment un portefeuille doit-il présenter un verdict de confiance à quelqu'un qui n'a jamais entendu parler de registre de confiance, sans masquer la décision ni le submerger ?",
    "Quels mécanismes de révocation préservent la vie privée du porteur tout en gardant la réponse d'un vérifieur assez fraîche pour valoir la peine d'être demandée ?"
  ]
}
```

- [ ] **Step 3: Verify**

Run: `npm run check:content && npm run build`

Then `npx serve out` and confirm `http://localhost:3000/en/research/#interop` scrolls to the first section.

- [ ] **Step 4: Commit**

```bash
git add messages
git commit -m "feat(research): rebuild page around shipped work"
```

---

### Task 5: Rebuild the projects list

**Files:**
- Modify: `content/projects/en.json`, `content/projects/fr.json`

**Interfaces:**
- Consumes: the `Project` type in `src/types/project.ts`, unchanged.
- Produces: `/projects/verana-wallet-interop/` as a linkable detail URL.

- [ ] **Step 1: Remove the five dead entries**

Delete these objects from both locale files: `clawfans`, `shellsafe`, `nullpost`, `deezer-legends`, `noctis`.

- [ ] **Step 2: Add the wallet interop entry, featured and first**

Prepend to `content/projects/en.json`:

```json
{
  "slug": "verana-wallet-interop",
  "title": "Verana Cross-Ecosystem Wallet Interop",
  "description": "Live trust-registry resolution wired into eight third-party identity wallets, replacing their hardcoded issuer lists.",
  "longDescription": "Every mature identity wallet ships a static list of trusted issuers, compiled at build time and updated by release. This work replaces that list with a live, fail-closed call to the Verana trust resolver, using the same HTTP surface in every target so the approach is portable rather than bespoke. Shipped and device-verified: MOSIP's Inji as a full issuer, wallet and verifier triangle; the EUDI reference Android wallet validated on testnet against France Identité's Unfold playground; Talao AltMe, Sphereon, Paradym and Procivis One built and demonstrated on device with both trusted and rogue paths verified; and Hologram running natively on vs-agent. SWIYU, the Swiss Confederation wallet, is partial: positive and control issuance flows are accepted on Android, one verifier request path remains blocked. Built for the Global Digital Trust Collaboration Award 2026, presented at GDC Geneva in September 2026.",
  "technologies": ["TypeScript", "Kotlin", "Rust", "Dart", "OID4VP", "OID4VCI", "SD-JWT VC", "DIDs", "Verifiable Credentials"],
  "demoUrl": "https://playground.mosip.testnet.verana.network/",
  "featured": true,
  "year": 2026
}
```

FR equivalent in `content/projects/fr.json`, same `slug`, `technologies`, `demoUrl`, `featured` and `year`, with `title` "Interopérabilité Verana entre portefeuilles", and `description` "Résolution de confiance en direct intégrée dans huit portefeuilles d'identité tiers, en remplacement de leurs listes d'émetteurs codées en dur." Translate `longDescription` faithfully, keeping every wallet name, the SWIYU caveat and the award reference intact.

- [ ] **Step 3: Add the Hologram agents entry**

```json
{
  "slug": "hologram-agents",
  "title": "Hologram Verifiable Service Agents",
  "description": "DIDComm and verifiable-credential AI agents running as production services on 2060.io's Hologram.",
  "longDescription": "Hologram is 2060.io's verifiable-trust messaging platform, where every connection between a human and an agent is gated by DIDs and verifiable credentials. I built and shipped several agents on it: a live-avatar agent backed by LiveKit that opens a session on connect, a multilingual concierge handling structured travel workflows, and a credential-gated automation bot. All are NestJS services deployed to Kubernetes with Helm, running on the vs-agent framework.",
  "technologies": ["TypeScript", "NestJS", "DIDComm", "Verifiable Credentials", "LiveKit", "Kubernetes", "Helm"],
  "featured": true,
  "year": 2026
}
```

FR: title "Agents de service vérifiables Hologram", description "Agents IA DIDComm et credentials vérifiables tournant comme services de production sur Hologram, la plateforme de 2060.io."

- [ ] **Step 4: Rewrite the Credat entry**

Replace the `credat` object's `longDescription` in EN, removing the Sybil sentence and describing the suite:

```json
"longDescription": "Credat is an open-source TypeScript library that brings decentralized identity to AI agent ecosystems. Agents get verifiable identities via did:web and did:key, issue scoped delegation credentials, and perform a cryptographic handshake to establish mutual trust. Built on W3C DID v1.1 and the Verifiable Credentials Data Model, with minimal dependencies and a transport-agnostic core. Around it sits a small suite: a CLI, drop-in protection for HTTP APIs, a LangChain and LangGraph integration, and runnable end-to-end demos."
```

FR equivalent. Before listing the suite publicly, confirm with Maxime which of the eight `credat` repositories are ready to be pointed at.

- [ ] **Step 5: Correct the wrong entries**

`reciproq`: description becomes "Marketing site for a French mental health startup." and `longDescription` becomes "Reciproq is a French startup working to improve access to mental health care. Over a two-month engagement I built key pages of its first marketing site in Next.js and Tailwind, implementing the Figma design system with a mobile-first, accessible and performance-minded approach, plus data-driven modules for testimonials and pricing so the team could update content without a deploy." Set `year` to 2025 and remove the `demoUrl` unless the site is confirmed live.

`hophopimmo`: replace "28K+" wherever it appears with "30,000+". Add Hoppy, the conversational assistant live in production, and the SEO architecture of 30+ city pages across 8 regions.

`pkba`: description becomes "Community website and member platform for the largest parkour club in southwestern France, co-founded in 2025." In `longDescription`, correct the athlete window to "2017 to 2025", and state membership as "around 80 members, growing to 110+ for the coming season". Add the member-management system, the admin dashboard behind custom authentication, and the Stripe flows for the merchandise shop and donations.

`vertiflow`: description becomes "Parkour and urban-movement brand with a hand-built e-commerce storefront." `longDescription` describes the real thing: full product catalogue, cart, serverless checkout, promo codes, automated order emails, SEO blog, FAQ and legal pages, deployed on Netlify.

`klyx`: add the productized pricing range and `blog.klyx.fr`. Set `featured` to `false`.

`claw4s-trust-protocol` and `credat`: keep `featured: true`. Set `hophopimmo` to `featured: false`.

- [ ] **Step 6: Add CiteMe and PkVision**

```json
{
  "slug": "citeme",
  "title": "CiteMe",
  "description": "Generative engine optimization platform measuring how often AI search engines cite a brand.",
  "longDescription": "Search is moving from Google to AI answer engines, and the brands that win the next decade are the ones AI actually cites. CiteMe crawls a site, runs multi-provider audits across the major AI engines, and returns a 0 to 100 score with prioritized, actionable fixes. A tracker surfaces real AI-bot visits so customers see which engines are reading their content. I co-founded it and serve as CTO, owning technical direction, AI architecture and product roadmap. Runs on Next.js 16, React 19, Supabase with pgvector for retrieval, a custom job queue, a multi-provider LLM layer, and Stripe billing.",
  "technologies": ["Next.js", "React", "TypeScript", "Supabase", "pgvector", "Stripe"],
  "demoUrl": "https://citeme.io",
  "featured": false,
  "year": 2026
}
```

```json
{
  "slug": "pkvision",
  "title": "PkVision",
  "description": "Open-source computer vision for automatic parkour trick detection and scoring.",
  "longDescription": "PkVision applies pose estimation and movement classification to parkour footage, detecting tricks and scoring them automatically. It comes out of eight years in the sport and the judging problem that competitive parkour has never solved cleanly: scoring is subjective, and judges disagree. An open experiment at the intersection of the two things I spend my time on.",
  "technologies": ["Python", "Computer Vision", "Pose Estimation"],
  "sourceUrl": "https://github.com/AirKyzzZ/pkvision",
  "featured": false,
  "year": 2026
}
```

FR equivalents for both.

- [ ] **Step 7: Verify**

Run: `npm run check:content && npm run build`

Expected: both pass. Confirm EN and FR project files contain the same `slug` set, in the same order.

- [ ] **Step 8: Commit**

```bash
git add content/projects
git commit -m "feat(projects): rebuild list around shipped work"
```

---

### Task 6: Rewrite the CV

**Files:**
- Modify: `messages/en.json`, `messages/fr.json` (`cv` namespace)

**Interfaces:**
- Consumes: `cv.experience`, `cv.education`, `cv.skills`, `cv.languages`, `cv.engagement` from Task 2.

- [ ] **Step 1: Rewrite experience, EN**

```json
"experience": [
  {
    "title": "Software Engineer",
    "company": "2060.io / Verana",
    "period": "Sep 2025 – Present",
    "desc": "Core engineer on Verana, an open trust layer for the internet. 182 merged pull requests since February 2026 across the trust registry frontend, the demo playground, the indexer and the resolver. Built spec-compliant credential tooling: JCS canonicalization, full BCP-47 language tagging, and validation rules sourced from the chain. Wired live trust resolution into eight third-party identity wallets including the EUDI reference wallet, MOSIP's Inji, Talao, Sphereon, Paradym and Procivis One. Shipped DIDComm and verifiable-credential agents on Hologram as NestJS services on Kubernetes."
  },
  {
    "title": "Co-founder & CTO",
    "company": "CiteMe",
    "period": "Jun 2026 – Present",
    "desc": "Generative engine optimization platform measuring and improving how brands appear inside AI search engines. Own technical direction, AI architecture and product roadmap. Next.js 16, Supabase with pgvector, a custom job queue, a multi-provider LLM layer and Stripe billing, serving paying customers."
  },
  {
    "title": "Software Engineer",
    "company": "Hop Hop Immo",
    "period": "Jan 2026 – Present",
    "desc": "Built Hoppy, a conversational AI real-estate assistant live in production, qualifying buyers across a catalogue of 30,000+ new-build listings. Built autonomous agents for marketing automation, and rebuilt the homepage with an SEO architecture spanning 30+ city pages and 8 regions."
  },
  {
    "title": "Founder",
    "company": "Klyx",
    "period": "Apr 2025 – Present",
    "desc": "Web studio in Bordeaux, run end to end: sales, design, development and delivery, with productized pricing from €900 one-pagers to €5,700+ custom builds. Delivered production client sites with live payment and operations flows, and run the studio's content engine at blog.klyx.fr."
  },
  {
    "title": "Web Developer",
    "company": "Reciproq",
    "period": "Apr 2025 – May 2025",
    "desc": "Two-month engagement building key pages of the first marketing site for a French mental health startup. Next.js and Tailwind, implementing the Figma design system mobile-first, with data-driven modules for testimonials and pricing."
  }
]
```

- [ ] **Step 2: Rewrite experience, FR**

Same five entries, translated. Periods use French month abbreviations (`Sep 2025 – Aujourd'hui`, `Jan 2026 – Aujourd'hui`, `Avr 2025 – Mai 2025`). Keep every number identical.

- [ ] **Step 3: Rewrite education**

EN:

```json
"education": [
  {
    "title": "Computer Science Engineering Programme",
    "school": "EPSI Bordeaux",
    "period": "Sep 2024 – Sep 2027",
    "desc": "Five-year software engineering programme. Currently working toward the RNCP 6 title Concepteur Développeur d'Applications (RNCP37873), September 2026 to September 2027. BTS SIO SLAM completed June 2026."
  },
  {
    "title": "CS50: Introduction to Computer Science",
    "school": "Harvard University (online)",
    "period": "Sep 2025 – Jan 2026",
    "desc": "Fundamental CS concepts: algorithms, data structures, systems programming."
  },
  {
    "title": "Baccalauréat Général, Mention Bien",
    "school": "Lycée Privé Saint-Elme",
    "period": "Jun 2024",
    "desc": "Specialization in Mathematics and Physics."
  }
]
```

FR equivalent.

- [ ] **Step 4: Rewrite skills and languages**

EN `skills`:

```json
[
  "Languages & Frameworks: TypeScript, JavaScript, Python, Next.js, React, Node.js, NestJS, LaTeX",
  "Identity & Trust: DIDs, Verifiable Credentials, DIDComm, OID4VP, OID4VCI, SD-JWT VC, trust registries, COSMOS SDK",
  "Infrastructure & DevOps: Docker, Kubernetes, Helm, GitHub Actions, GitLab CI, Git, PostgreSQL",
  "AI Systems: multi-provider LLM routing, retrieval-augmented generation, pgvector, agent orchestration"
]
```

EN `languages`:

```json
[
  "French, native",
  "English, bilingual (C2, EFSET 87/100)",
  "German, B1 certified",
  "Mandarin Chinese, in progress"
]
```

FR equivalents.

- [ ] **Step 5: Rewrite engagement**

EN:

```json
"engagement": [
  {
    "title": "Open Source",
    "desc": "Contributor to credo-ts at the OpenWallet Foundation, where a fix to did:webvh log proof verification methods was merged in August 2026. Creator of Credat, an open-source trust layer for AI agents."
  },
  {
    "title": "PKBA",
    "desc": "Co-founder, treasurer and head of communication of a parkour club in southwestern France, around 80 members and growing to 110+ for the coming season. Featured by France 3 Nouvelle-Aquitaine."
  },
  {
    "title": "VertiFlow",
    "desc": "Founded a parkour and urban-movement brand, and built its e-commerce storefront from scratch."
  },
  {
    "title": "GDG Bordeaux",
    "desc": "Active member of the Google Developer Group since 2024, attending meetups and codelabs on web, cloud and AI across the Bordeaux tech ecosystem."
  }
]
```

The GDG entry claims attendance only. Maxime attended the Flutter workshop, he did not run it.

FR equivalent.

- [ ] **Step 6: Verify and commit**

Run: `npm run check:content && npm run build`

```bash
git add messages
git commit -m "feat(cv): rewrite against verified experience and correct education"
```

---

### Task 7: SEO and GEO pass

**Files:**
- Modify: `src/components/seo/structured-data.tsx`
- Modify: `messages/en.json`, `messages/fr.json` (`metadata` namespace)
- Create: `src/app/[locale]/research/page.tsx` metadata export, and the same for `projects`, `publications`, `talks`, `cv`

**Interfaces:**
- Consumes: the rebuilt copy from Tasks 3 to 6.
- Produces: per-route metadata consumed by nothing else.

- [ ] **Step 1: Update the Person schema**

In `src/components/seo/structured-data.tsx`, change `jobTitle` and extend `worksFor` and `knowsAbout`:

```tsx
jobTitle: 'Self-Sovereign Identity Engineer',
worksFor: [
  { '@type': 'Organization', name: '2060.io', url: 'https://2060.io' },
  { '@type': 'Organization', name: 'Verana', url: 'https://verana.io' },
  { '@type': 'Organization', name: 'CiteMe', url: 'https://citeme.io' },
  { '@type': 'Organization', name: 'Klyx', url: 'https://klyx.fr' },
],
knowsAbout: [
  'Self-Sovereign Identity',
  'Decentralized Identity',
  'Verifiable Credentials',
  'Trust Registries',
  'DIDComm',
  'OpenID for Verifiable Presentations',
  'AI Agent Identity',
],
```

- [ ] **Step 2: Update the metadata description**

EN `metadata.description`:

```
"Self-sovereign identity engineer at 2060.io, working on Verana. Trust registries, verifiable credentials, wallet interoperability, and identity for AI agents. Based in Bordeaux, France."
```

FR:

```
"Ingénieur en identité auto-souveraine chez 2060.io, sur Verana. Registres de confiance, credentials vérifiables, interopérabilité des portefeuilles et identité des agents IA. Basé à Bordeaux, France."
```

- [ ] **Step 3: Add per-route metadata**

Each of `research`, `projects`, `publications`, `talks` and `cv` currently inherits only the layout title template. Add to each page file:

```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'research' })
  return {
    title: t('title'),
    description: t('intro').slice(0, 155),
    alternates: { canonical: `/${locale}/research/` },
  }
}
```

Adjust the namespace, key and path per page. `research` and `cv` already have a usable string (`intro`, and for `cv` the title). `projects`, `publications` and `talks` do not, so add a `metaDescription` key to each namespace first and read that instead of `intro`.

EN values:

```json
"projects": { "metaDescription": "Selected work: cross-ecosystem wallet trust integrations, Credat, the Claw4S agent trust protocol, and verifiable service agents on Hologram." },
"publications": { "metaDescription": "Peer-reviewed and conference work on decentralized agent-to-agent trust using DIDs and Verifiable Credentials." },
"talks": { "metaDescription": "Conference talks on digital identity, trust registries and cross-ecosystem wallet interoperability." }
```

FR values:

```json
"projects": { "metaDescription": "Travaux sélectionnés : intégrations de confiance inter-écosystèmes, Credat, le protocole de confiance entre agents Claw4S, et les agents de service vérifiables sur Hologram." },
"publications": { "metaDescription": "Travaux de recherche et de conférence sur la confiance décentralisée entre agents, fondée sur les DIDs et les Verifiable Credentials." },
"talks": { "metaDescription": "Interventions en conférence sur l'identité numérique, les registres de confiance et l'interopérabilité des portefeuilles." }
```

- [ ] **Step 4: Verify and commit**

Run: `npm run check:content && npm run build`

Then inspect `out/en/research/index.html` and confirm the `<title>`, `<meta name="description">` and canonical link are present and page-specific.

```bash
git add src messages
git commit -m "feat(seo): per-route metadata and updated structured data"
```

---

### Task 8: Remove the noindex

This is the point of no return. Do not start it until Tasks 1 to 7 are merged and the content check passes.

**Files:**
- Modify: `src/app/[locale]/layout.tsx`
- Modify: `netlify.toml`
- Verify: `public/robots.txt`

- [ ] **Step 1: Remove the robots block from the layout**

In `src/app/[locale]/layout.tsx`, delete the entire `robots` key from the returned `Metadata` object:

```tsx
robots: {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
},
```

Next's default is indexable, so removing the key is sufficient. Do not replace it with `index: true`.

- [ ] **Step 2: Remove the header from netlify.toml**

In `netlify.toml`, delete this line from the `[headers.values]` block, leaving the four security headers in place:

```toml
X-Robots-Tag = "noindex, nofollow"
```

- [ ] **Step 3: Confirm robots.txt agrees and points at the sitemap**

`public/robots.txt` already allows everything. Add the sitemap reference:

```
User-agent: *
Allow: /

Sitemap: https://maximemansiet.fr/sitemap.xml
```

Confirm `out/sitemap.xml` exists after a build and lists both locales. If it is a stale static file rather than generated, note it and raise it before deploying.

- [ ] **Step 4: Verify**

Run: `npm run build`

Then: `grep -ri "noindex" out/ | head` and expect no matches.

- [ ] **Step 5: Commit**

```bash
git add src/app/\[locale\]/layout.tsx netlify.toml public/robots.txt
git commit -m "feat: allow search engines to index the site"
```

---

### Task 9: Draft the standards group applications

Not repo work. Produces two drafts for Maxime to send himself.

**Files:**
- Create: `docs/applications/w3c-ccg.md`
- Create: `docs/applications/toip.md`

- [ ] **Step 1: Draft the W3C CCG note**

Write `docs/applications/w3c-ccg.md` containing the join steps (create a W3C account, join via the Credentials Community Group page, sign the IPR agreement before contributing to work items, subscribe to public-credentials@w3.org) and a short introduction message for the mailing list. The introduction leads with the eight-wallet integration and links `https://maximemansiet.fr/en/research/#interop`. It states interest in the interoperability questions from the Research page, and claims no affiliation he does not have.

- [ ] **Step 2: Draft the ToIP note**

Write `docs/applications/toip.md` covering the free individual contributor membership route, the contributor agreement, joining the Trust Registry Task Force, the Thursday meeting slots, the `#tswg-trust-registry-tf` Slack channel and technical-stack-wg@lists.trustoverip.org. The pitch: TRQP v2.0 is in public review, and he arrives with eight independent wallet implementations calling a live trust registry, which is implementation feedback the specification wants. Include a note that a previous application was not accepted, and that this is the standard free contributor route rather than a repeat of whatever was tried before.

- [ ] **Step 3: Commit**

```bash
git add docs/applications
git commit -m "docs: draft W3C CCG and ToIP applications"
```

---

## Notes for the executor

- Tasks 1 to 6 are content. The build is the compile check, `npm run check:content` is the correctness check. There are no unit tests in this repo and this plan does not add a test framework for prose.
- If `t.raw()` returns `undefined` for a key after Task 2, the message file shape and the page component have drifted apart. Fix the message file, not the component.
- Task 8 is irreversible in the sense that crawlers will see whatever is live. Do not run it early to save time.
- Two items need Maxime before they can be finalized: the award's exact public name, used in Task 5 and the Task 1 talk entry, and which `credat` repositories are public-ready, used in Task 5 Step 4.
- After the site is deployed following Task 8, verify from outside: `curl -sI https://maximemansiet.fr/en/ | grep -i robots` returns nothing, and the served HTML contains no `noindex`. A Netlify header can survive a build, so checking `out/` alone is not sufficient.

## Out of scope, but Maxime needs to do it

The same stale and incorrect claims live on his LinkedIn and are not fixed by this plan. Surface this list when the plan completes:

- GDG Bordeaux says he "ran an introductory Flutter workshop". He attended it.
- "38+ merged PRs" is now 182.
- Hop Hop Immo says 58,000+ listings, should be 30,000+.
- PKBA says 80+ members, 110+ is next season.
- German says limited working, it is B1 certified.
- Mandarin Chinese is missing.
- The headline leads with "Founder @ Klyx.fr · CTO @ CiteMe", which contradicts the site's positioning decision.
