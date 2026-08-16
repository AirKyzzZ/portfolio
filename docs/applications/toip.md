# Trust over IP Foundation, Trust Registry Task Force

You applied once before and were not accepted. Worth knowing why that is strange: ToIP
Contributor Membership is free and open to individuals as well as organisations, and
every Working Group and Task Force is open to every member. There is no selection step
to fail on the standard contributor route, which suggests the previous attempt went
through a different path, an organisational tier, or stalled in paperwork rather than
being judged and refused. Treat this as a fresh application through the free individual
route, not as an appeal.

## How to join

1. Go to https://trustoverip.org/get-involved/membership/ and select Contributor
   Membership. It is free for individuals.
2. Sign the ToIP membership agreements as a Contributor. This is the IPR paperwork and
   it is what actually grants working group access.
3. ToIP sits under LF Decentralized Trust. You do not need separate LFDT membership to
   participate in ToIP groups.
4. Join the Trust Registry Task Force. It runs under the Technical Stack Working Group.
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

## Sequencing note

Join the W3C CCG first. It is instant, free, and gives you a public record before the
ToIP application is processed. See [w3c-ccg.md](./w3c-ccg.md).

Do not put either affiliation on the portfolio, the CV, or LinkedIn until membership is
confirmed. The site currently has a claim removed for exactly that reason.
