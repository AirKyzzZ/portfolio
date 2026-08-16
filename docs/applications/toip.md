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

## Why this task force and why now

The Trust Registry Query Protocol v2.0 is in public review. A public review is the single
best moment to arrive, because review comments are a real contribution that costs no
political capital and gets recorded against your name. You do not have to propose
anything to be useful, you only have to have implemented something and say what broke.

You have implemented something. Eight independent wallets now resolve trust through a
live registry instead of a compiled-in issuer list, across four languages and four
ecosystems, with the failure paths deliberately exercised. Almost nobody writing that
specification has done the integration eight times, and implementation feedback at
public-review stage is exactly what the editors are asking for.

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
> Two things came out of that which are relevant to TRQP v2.0 review, and I would rather
> raise them here than solve them privately.
>
> First, availability. A live trust query is a network dependency in a flow that
> previously had none. Fail-closed is the right default and it is also the behaviour that
> breaks a demo when the registry is briefly unreachable. I have not found guidance in
> the specification on what a conforming implementation should do here, and I suspect
> different implementers are making different choices silently.
>
> Second, the boundary with ETSI trusted lists and OpenID Federation. EUDI is X.509 and
> trusted-list centric, TRQP is registry centric, and the two make different governance
> assumptions. In practice I bridged them at the resolver, which is format agnostic. I
> would like to know whether the task force considers that the intended seam.
>
> Glad to help with review, and happy to contribute implementation reports if that is
> useful to the editors.

## What the site may claim, and when

Right now: member of the Trust over IP Foundation. That is on the CV under Standards
Bodies and in the news feed, phrased as following the work rather than contributing.

Once you have attended TRTF calls and filed review comments on TRQP v2.0, that sentence
can change to say you participate in the Trust Registry Task Force. Not before.
`scripts/check-content.mjs` blocks any copy pairing Trust over IP with chair, editor,
working group or task force, so the gate will fail the build if that claim lands early.
Loosen the guard in the same commit that earns the claim.
