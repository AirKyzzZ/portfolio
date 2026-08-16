# W3C Credentials Community Group

Free, open to anyone, no organisational sponsorship needed. This is the lowest-friction
standards room in the ecosystem and its archives are public and search-indexed, so your
name accumulates in a record other people can find.

## How to join

1. Create a W3C account at https://www.w3.org/account/request if you do not have one.
2. Join the group at https://www.w3.org/community/credentials/join
3. Sign the W3C Community Contributor License Agreement. Joining lets you attend and
   read; the CLA is what lets you contribute to work items, so sign it now rather than
   when you first want to open a pull request.
4. Subscribe to public-credentials@w3.org. The list is where most of the substance
   happens between calls.
5. Weekly calls are listed at https://www.w3.org/groups/cg/credentials/calendar/

Anyone may attend a call without joining. Joining costs nothing and takes a few minutes.

## Introduction to the mailing list

Send this once you are subscribed. Keep it short, the list gets a lot of traffic and
long self-introductions get skimmed.

> Subject: Introduction, and a note on trust registries in shipped wallets
>
> Hi all,
>
> I'm Maxime Mansiet, a software engineer at 2060.io working on Verana, an open trust
> layer built around a public registry of trust registries.
>
> Most of my time this year has gone into a specific interoperability problem, and I
> wanted to introduce myself by describing it rather than by listing interests.
>
> Every mature identity wallet I have worked with ships a static list of trusted
> issuers, compiled at build time and updated by release. I replaced that list with a
> live, fail-closed call to a trust registry in eight third-party wallets: the EUDI
> reference Android wallet, MOSIP's Inji, Talao AltMe, Sphereon, Paradym, Procivis One,
> SWIYU from the Swiss Confederation, and 2060.io's Hologram. Seven are built and
> verified on device with both trusted and rogue paths exercised. SWIYU is partial, one
> verifier request path is still blocked. Write-up here:
> https://maximemansiet.fr/en/research/#interop
>
> Doing this eight times surfaced questions I would rather discuss than guess at. The
> one I keep returning to: a live trust call is a network dependency, and fail-closed is
> easy to argue for on a whiteboard and hard to defend the first time a registry is
> unreachable during a real presentation. I have not found a satisfying answer and would
> be glad to hear how others think about it.
>
> Happy to be here, and happy to contribute where an implementation perspective is
> useful.
>
> Maxime

## What to do in the first month

Read before writing. Attend two or three calls and follow the list before proposing
anything. The CCG has long-running threads and the fastest way to be discounted is to
reopen a settled question.

When you do contribute, lead with the eight implementations. Almost nobody in a
standards room has wired the same trust primitive into that many independent codebases,
and that is the thing you have that they want.
