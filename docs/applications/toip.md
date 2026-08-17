# Trust over IP Foundation, Trust Registry Task Force

**Status: you are a member.** Joined August 2026, no working group or task force yet,
watching rather than contributing to specification work. The site says exactly that and
nothing more.

The remaining step is picking a room. Membership alone is a line on a page; the Trust
Registry Task Force is where the membership turns into something worth citing.

## Joining the task force

Every Working Group and Task Force is open to every member, so there is no application
and nobody to convince. You add yourself.

1. Trust Registry Task Force, under the Technical Stack Working Group.
   - Wiki: https://lf-toip.atlassian.net/wiki/display/HOME/Trust+Registry+Task+Force
   - Slack: `#tswg-trust-registry-tf`
   - Mailing list: technical-stack-wg@lists.trustoverip.org (the TF has no separate list)
   - Meetings: every Thursday, two slots, one NA/EU and one APAC. Take the NA/EU slot.
     All meetings are recorded, so a missed week is recoverable.

## Why this task force, and the actual opening

Correction to an earlier draft of this note: TRQP v2.0 is **not** in public review. It was
approved as a ToIP deliverable in **December 2025**. The review window closed, which is
why `tswg-trust-registry-protocol` has been quiet since April 2026.

The real opening is better. TRQP v2.0 defines conformance targets for TRQP Endpoints,
TRQP Consumers and the HTTPS Binding, and **there is no conformance test suite for any of
them**. That is a named, acknowledged gap in an approved specification.

You are unusually well placed to fill it. Eight independent wallets now resolve trust
through a live registry instead of a compiled-in issuer list, across four languages and
four ecosystems, with failure paths deliberately exercised. You have already written, by
hand, most of what a conformance suite would assert. Turning that into a test suite is a
concrete deliverable with your name on it, not a comment on someone else's draft.

Compare with the W3C CCG, which maintains exactly this kind of artifact
(`vc-api-issuer-test-suite`, `vc-api-verifier-test-suite`, `did-key-test-suite`, all
updated within the last week). That is the shape to copy.

## What to say when you introduce yourself

Do not open with interest in the topic. Open with the integrations and one problem you
hit that the specification does not yet answer cleanly.

> I'm Maxime Mansiet, an engineer at 2060.io working on Verana, a verifiable public
> registry implementing trust registry semantics.
>
> Over the past several months I integrated live trust resolution into eight third-party
> identity wallets: the EUDI reference Android wallet, MOSIP's Inji, Talao AltMe,
> Sphereon, Paradym, Procivis One, SWIYU from the Swiss Confederation, and Hologram.
> Seven are verified on device with both trusted and rogue paths exercised. The
> consistent finding is that each wallet had a static trusted-issuer list compiled at
> build time, and the integration in every case was replacing that list with a live
> query. Detail: https://maximemansiet.fr/en/research/#interop
>
> I understand v2.0 is approved and that no conformance test suite exists yet for the
> three conformance targets. I would like to help build one, and I think the integration
> work is the right raw material: most of what a suite would assert, I have already
> checked by hand, eight times, against implementations I did not write.
>
> Two things I hit that the specification does not appear to settle, which a test suite
> would have to take a position on either way.
>
> First, availability. A live trust query is a network dependency in a flow that
> previously had none. Fail-closed is the right default and it is also the behaviour that
> breaks a demo when the registry is briefly unreachable. I have not found guidance on
> what a conforming implementation should do here, and I suspect different implementers
> are making different choices silently.
>
> Second, the boundary with ETSI trusted lists and OpenID Federation. EUDI is X.509 and
> trusted-list centric, TRQP is registry centric, and the two make different governance
> assumptions. In practice I bridged them at the resolver, which is format agnostic. I
> would like to know whether the task force considers that the intended seam.
>
> Happy to start with implementation reports if that is more useful than jumping straight
> to a suite.

## What the site may claim, and when

Right now: member of the Trust over IP Foundation. That is on the CV under Standards
Bodies and in the news feed, phrased as following the work rather than contributing.

Once you are actually attending calls in a working group or task force, that sentence
can change to say you participate in the Trust Registry Task Force. Not before.
`scripts/check-content.mjs` blocks any copy pairing Trust over IP with chair, editor,
working group or task force, so the gate will fail the build if that claim lands early.
Loosen the guard in the same commit that earns the claim.

## Which room, revisited

The Trust Registry Task Force is the obvious fit for the day job, and the conformance
suite is the way in. But two other groups are more active right now and one is a better
fit for where the research is heading.

**AI & Human Trust Working Group (AIM WG)**, and specifically its **Fiduciary Agent Stack
Task Force**. Building agent-to-agent infrastructure for "long term or consequential
relationships bound by mutual duties": duty-bound agents with capability constraints,
audit trails, and defined permissions and prohibitions. That is Credat's problem
statement written by someone else. The repo is `trustoverip/aimwg-agent-fiduciary-duties`,
14 commits old, updated within the last day, and its README still contains a literal
`<ADD OTHER TASK FORCE DETAILS, HOW TO PARTICIPATE>` placeholder. A room that new is one
you help shape rather than join late.

**Decentralized Trust Graph Working Group**, `trustoverip/dtgwg-trust-tasks-tf`. Trust
Tasks are self-contained, transport-agnostic JSON descriptions of verifiable work between
parties, with a live registry at trusttasks.org. Transport-agnostic and DIDComm-compatible,
so it touches both the Verana and Hologram sides of your work.

Recommendation: AIM WG for the research, TRTF for the conformance suite. Both are free and
open to you as an existing member; there is no application for either.
