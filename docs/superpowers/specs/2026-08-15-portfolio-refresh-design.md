# Portfolio refresh, August 2026

Design for bringing maximemansiet.fr back in line with the actual work, correcting
false and stale claims, and preparing the site to be indexed.

## Why

The site was last touched 2026-05-16. In the three months since, the work changed
shape: Verana trust integration shipped into eight third-party wallets, a second
research thread died, and a company was co-founded. None of that is on the site.

Worse, the site currently carries three claims that are not true:

1. "I recently joined the Trust over IP Foundation" (`home.bio4`). Never accepted.
2. A GDG Bordeaux talk on Next.js (`talks.talk1*`, `home.news4`). Placeholder, never given.
3. "RNCP Level 7" (`cv.edu1desc`). It is RNCP 6.

Those come out first, regardless of anything else in this document.

## Positioning

Decided: **SSI engineer, research-backed.**

The headline identity is self-sovereign identity engineering at 2060.io, working on
Verana, for humans and AI agents. Klyx, CiteMe and Hop Hop Immo appear as facts in
CV and Projects. They never appear in the headline, the sidebar, the metadata
description, or the bio's opening paragraph.

Audience, in priority order: 2060.io and Verana ecosystem peers, standards bodies
(W3C CCG, ToIP, OpenID DCP), conference and award juries, SSI employers.

## Verified source data

Everything below was checked against GitHub and the local work directory on
2026-08-15. Numbers in the site copy must come from here, not from LinkedIn, which
is itself out of date.

### Contribution volume

| Org | Merged | Open |
|---|---|---|
| `verana-labs` | 182 | 8 |
| `2060-io` | 18 | 3 |
| `openwallet-foundation` | 1 | 0 |

First verana-labs PR 2026-02-27, most recent 2026-08-14. Distribution: playground
101, verana-frontend 34, mosip-playground 25, vs-agent 13, verana-visualizer 8,
verana-docs 3, verana-indexer 2, verana-deploy 2, and one each across
wallet-frontend, verre, verana-spec, verana-resolver, verana.io-website,
veranacouncil.org-website, plus the six wallet forks.

The OpenWallet Foundation contribution is exactly one merged PR:
`openwallet-foundation/credo-ts#2899`, `fix(webvh): use a verification method URL in
DID log proofs`, merged 2026-08-03. It is named precisely or not at all.

### Cross-ecosystem wallet interop

Built for the Collaboration Award 2026 (Global Digital Trust Awards), ceremony
3 September 2026 at GDC Geneva. Confirm the award's exact public name before
publishing.

| Target | Status |
|---|---|
| MOSIP / Inji | Live, full issuer/wallet/verifier triangle |
| EUDI Reference Android + Unfold (France Identité) | Official Android wallet validated on testnet |
| Hologram (2060.io) | Native, runs on vs-agent |
| Paradym Wallet (Animo) | Built and demoed on device |
| Sphereon Wallet | Built and demoed on device, trusted and rogue paths verified |
| Talao / AltMe | Built and demoed on device, trusted and rogue paths verified |
| Procivis One Wallet | Source/build delivery, positive and control flows, APK retained |
| SWIYU (Swiss Confederation) | Partial. Q1+Q2 accepted on Android, Q1+Q3 blocked on verifier request algorithm |

Planned, not shipped, and therefore not claimed: walt.id, MultiPaz, wwWallet,
BC Wallet, iGrant, Yivi.

The thesis, stated once and reused: every mature wallet ships a static
trusted-issuer list. Replace it with a live call to the Verana resolver, fail-closed.
Integration surface is the resolver HTTP API at `resolver.testnet.verana.network`.

SWIYU is described with its blocker intact. A partial integration described as
complete is the kind of claim this refresh exists to remove.

### Research output

Live: Claw4S, "Trustless Scientific Collaboration", Claw4S Conference 2026
(Stanford x Princeton), `clawrxiv.io/abs/2603.00405`. Already on the site, stays.

Dead: the MPAW / HoloClaw paper on multi-party agent workflows. Will not be
released. It does not appear anywhere on the site.

Next research direction is undecided, leaning interoperability. The Research page's
open questions lean that way without announcing a project that does not exist.

## Per-page design

### Global

Sidebar role line becomes the SSI framing rather than "Fullstack Developer".
Organisation line stays 2060.io and Verana.

`PersonSchema` gains CiteMe and Klyx in `worksFor`, an updated `jobTitle`, and a
`knowsAbout` list matching the rebuilt Research page.

### Home

Bio goes from five paragraphs to four:

1. Opening. Keeps the trust-without-a-central-authority thread, it works and it is true.
2. 2060.io. The real work: trust registries, credential tooling, wallet integrations.
3. Agents. Credat and Claw4S. The Sybil framing is removed, it is outdated.
4. Parkour. Stays, it is distinctive. Dates corrected to 2017 to April 2025.

The current `bio4` is deleted entirely. It carries the false ToIP claim, and the part
worth keeping belongs in paragraph 3.

Age stays, corrected to 20. It is an asset here rather than filler: the same sentence
reads differently when the person shipping into production trust infrastructure is
20. It is placed next to the concrete work so it modifies something, not left standing
alone as a fact about him. It needs an edit every birthday, which is accepted.

Research interests are replaced with five that match the actual work: trust
registries and TRQP, cross-ecosystem wallet interoperability, agent identity and
delegation, credential exchange protocols (OID4VP, OID4VCI, SD-JWT VC), trust
frameworks and governance.

News is rebuilt newest-first: GDC Geneva co-speaking (September 2026), the wallet
integrations and award submission (August 2026), the credo-ts upstream fix (August
2026), CiteMe (June 2026), Claw4S (March 2026), Credat (February 2026), 2060.io
(September 2025), PKBA (July 2025), Klyx (April 2025). `news4` is deleted.

W3C CCG and ToIP do not appear in News until membership is actually confirmed.
Announcing an affiliation before it exists is the exact error being corrected.

### Research

Rebuilt evidence-first. Every section leads with shipped work, then the question it
exposed. Three sections replace the four survey areas.

1. **Cross-ecosystem trust interoperability.** The wallet table, the static-list to
   live-resolver thesis, fail-closed behaviour, MOSIP live and EUDI validated. Given
   an anchor id so `/research/#interop` is linkable on its own.
2. **Trust registries in production.** Verana's VPR model, the resolver, TRQP,
   credential tooling (JCS canonicalization, BCP-47 language tagging, chain-sourced
   validation rules).
3. **Agent identity and delegation.** Credat and the Claw4S protocol. Nothing else,
   the second paper is dead.

Open questions rewritten and tied to those sections, weighted toward
interoperability. No Sybil question.

### Projects

Featured, in order: Verana wallet interop, Credat, Claw4S protocol, Hologram
verifiable agents.

Featured is reserved for SSI work. The commercial projects are present but not
promoted, which is what the positioning decision requires.

Added: Verana wallet interop, Hologram verifiable agents, CiteMe, PkVision.

Rewritten: Credat as a package suite rather than one library (confirm which of the
eight repos are public-ready before listing them), VertiFlow as the e-commerce
storefront it actually is, PKBA with correct numbers, Hop Hop Immo at 30k+ listings,
Reciproq as a mental health startup's marketing site.

Removed: ClawFans, Shellsafe, NullPost, Noctis, Deezer Legends. Early 2026
experiments, superseded, and they dilute a page that now has real work on it.

### Publications

Unchanged, one entry. Claw4S. Not padded.

### Talks

`talk1` deleted. Replaced with GDC Geneva 2026, 1 to 3 September, Palexpo, co-speaking
with Fabrice Rochette and Ariel Gentile for 2060.io on the Global Digital Trust
Collaboration Award work. Session title, day and track are not yet known, so the
entry states what is confirmed and no more.

### CV

Experience rewritten against verified data and extended past three entries:

- 2060.io, September 2025 to present. Trust registry frontend and credential tooling,
  the wallet integrations, Hologram agents on NestJS and Kubernetes, 182 merged PRs.
- CiteMe, June 2026 to present, co-founder and CTO.
- Hop Hop Immo, January 2026 to present, 30k+ listings, Hoppy assistant, SEO rebuild.
- Klyx, April 2025 to present, productized €900 to €5,700+, named clients.
- Reciproq, April to May 2025, mental health startup marketing site.

Education corrected: EPSI Bordeaux 2024 to 2027, currently the RNCP 6 title
(RNCP37873, Concepteur Développeur d'Applications, September 2026 to September 2027);
BTS SIO SLAM completed June 2026; Harvard CS50 September 2025 to January 2026;
Baccalauréat Général June 2024.

Languages: French native, English C2 (EFSET 87/100), German B1 certified, Mandarin
Chinese in progress.

Engagement section: the OpenWallet Foundation line becomes the named credo-ts PR.
Face10ai is dropped. PKBA and VertiFlow entries corrected. GDG Bordeaux stays as
attendance and community, with no claim of having run anything.

## Sequencing

As requested, in this order, not in parallel:

1. Content refresh, all pages, both locales.
2. SEO and GEO pass: per-page `generateMetadata`, structured data, heading structure,
   quotable claim sentences, entity consistency, sitemap verification.
3. De-index: remove `robots.index: false` from `src/app/[locale]/layout.tsx`, remove
   `X-Robots-Tag` from `netlify.toml`, confirm `public/robots.txt` agrees. All three
   in one commit so the signals never disagree.

Step 3 is the point of no return for the false claims, so step 1 must be complete
and verified first.

## Standards groups

Deliverable is a drafted application and pitch for each. Not repo work, and it does
not gate the content refresh, so it runs last or in parallel.

**W3C Credentials Community Group.** Free. Requires a W3C account and the join form.
Weekly calls, public minutes, public-credentials@w3.org. Contributing to work items
needs the IPR agreement signed.

**Trust over IP, Trust Registry Task Force.** Contributor membership is free for
individuals and opens every working group and task force. TRTF meets Thursdays in
two timezone slots, Slack `#tswg-trust-registry-tf`, mailing list
technical-stack-wg@lists.trustoverip.org. TRQP v2.0 is in public review, which is
the lowest-barrier entry point for a first real contribution.

Both applications lead with the same evidence: eight third-party wallets wired to a
live trust registry, with device-verified trusted and rogue paths. Interest is not
the pitch, the implementations are.

DIF is deferred. Its Trusted AI Agents and Identifiers & Discovery groups are a good
fit for Credat and the did:webvh work, but it costs IPR paperwork and the trust
registry room is the better first move.

## Out of scope

- Visual redesign. The academic layout stays.
- New page types or routes.
- The dead MPAW paper.
- LinkedIn edits, tracked separately below but not part of this repo's work.

## LinkedIn corrections, tracked separately

Not repo work, but the same claims live there and should match:

- GDG Bordeaux says "ran an introductory Flutter workshop". He attended it. Reword.
- "38+ merged PRs" is now 182.
- Hop Hop Immo says 58,000+ listings, should be 30k+.
- PKBA says 80+ members, 110+ is next season.
- German says limited working, it is B1 certified.
- Mandarin is missing.

## Verification

- `npm run build` clean.
- EN and FR message files have identical key sets, checked by recursively flattening
  both JSON files to dotted key paths and diffing the sets in both directions. A key
  present in one locale and not the other fails the check.
- No occurrence of "Trust over IP", "Sybil", "Face10ai", "RNCP Level 7", or the GDG
  talk strings anywhere under `messages/` or `content/`.
- Every number in the copy traces to the verified source data section above.
- After step 3, `curl -I` on the deployed site returns no `X-Robots-Tag`, and the
  rendered HTML contains no `noindex`.
