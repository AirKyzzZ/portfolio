# Design: "The Future of AI Agents Is Verifiable, Customizable, and Yours"

## Overview

A bilingual (EN/FR) blog post for maximemansiet.fr about verifiable, customizable AI agents — arguing that the next wave of AI isn't smarter agents but trustworthy ones, and that this power belongs to non-technical users too.

## Decisions

- **Audience**: Mixed — accessible hook, progressive depth
- **Approach**: Thesis-first ("The Bet") — strong claim backed by two concrete examples
- **Length**: Short (~800-1000 words)
- **Tone**: Opinionated, confident, non-technical at the surface with substance underneath
- **Architectural highlights**: 2 selected (HoloClaw enforcement point, EAFIT no-code agent creation) — no deep code or protocol internals
- **CTA**: Read the MPAW paper
- **Format**: MDX in `content/blog/{en,fr}/verifiable-ai-agents.mdx`

## Article Metadata

```yaml
title: "The Future of AI Agents Is Verifiable, Customizable, and Yours"
date: "2026-04-16"
description: "AI agents are getting autonomous. That's powerful — and dangerous. Verifiable credentials, scoped permissions, and decentralized identity are how we make them trustworthy for everyone, not just developers."
tags: ["AI Agents", "SSI", "Verifiable Credentials", "Hologram", "Trust"]
```

**Slug**: `verifiable-ai-agents`

## Structure (5 sections, ~800-1000 words total)

### 1. Hook — "AI agents are going autonomous. Who's watching them?" (~150 words)

The problem statement. AI agents are increasingly making decisions, calling APIs, accessing tools — but there's zero accountability layer. You can't verify who operates a bot, what it's allowed to do, or whether it actually did what it says. Fine for personal chatbots. Breaks completely for real-world services.

**Key points:**
- Agents calling tools on your behalf with no audit trail
- No way to verify the operator behind a bot
- No scoped permissions — it's all-or-nothing access
- This is the trust gap between "cool demo" and "production-grade"

### 2. The Thesis — "Verification is the missing layer" (~150 words)

The argument: the next wave isn't smarter agents, it's trustworthy agents. Three pillars:

1. **Verifiable credentials** — agents prove who they are and who operates them
2. **Scoped permissions** — every tool call goes through role-based access control
3. **Decentralized identity** — no central authority, cryptographic trust

This isn't a developer concern — it's the foundation for anyone deploying or interacting with an AI agent safely. The shift from "trust the platform" to "verify the agent."

### 3. What This Looks Like in Practice — Two Examples (~350 words)

#### Example A: HoloClaw — Multiplayer verified AI workspaces

Multiple verified users sharing one AI session. Each person has a cryptographically verified identity, a role (collaborator, observer, approver), and every tool call passes through a single enforcement point that decides: allow, deny, or request approval.

**Highlight**: The enforcement point pattern — no tool invocation bypasses it. Every action is logged, broadcast to members, and tied to a verified identity. This is how you get accountability in multi-agent workflows.

Reference the paper: "We formalized this model in *Verifiable Multi-Party Agent Workflows*, a paper describing the MPAW framework for N DID-authenticated participants sharing a single agent session." (Paper currently in review — mention by title without link. Link to be added upon publication.)

#### Example B: EAFIT Hackathon — Non-tech users creating their own verified agents

University students at EAFIT (Colombia) building a no-code platform where anyone — a plumber, a florist, a freelance consultant — can create their own AI agent:

- Give it a persona (name, profession, personality)
- Connect MCP tools (Google Calendar, Gmail, weather API)
- Deploy it on infrastructure with one click
- Clients interact via Hologram — scanning a QR code, verifying the agent's identity via blockchain credentials, then chatting

The plumber's agent manages appointments. The florist's agent handles orders. Each one is verifiable from day one — clients know who operates it, what it can do, and that interactions are cryptographically secured.

**Highlight**: This is not a developer tool. It's a platform for non-technical people to own their AI presence with built-in trust guarantees.

### 4. Why This Matters — "Multiple perspectives, full accountability" (~200 words)

The bigger picture: multiple verifiable semi-autonomous agents working together. Different models, different scopes, different perspectives — but all accountable.

**Key arguments:**
- Verification of actions and scopes is the future of augmented AI workflows
- Security and traceability aren't optional extras — they're the foundation
- Multi-agent workflows become more powerful when each agent has a verified identity and bounded permissions
- This is augmented workflows, not black-box automation
- The model works across services, teams, and organizations

### 5. CTA — Read the Paper (~100 words)

Link to the MPAW paper. Position it as the formal foundation for this vision. Invite readers to engage with the ideas — this is an open problem space with real implementations backing the theory.

## Implementation

- **Files to create**:
  - `content/blog/en/verifiable-ai-agents.mdx`
  - `content/blog/fr/verifiable-ai-agents.mdx`
- **No component changes needed** — standard MDX blog post using existing rendering pipeline
- **No new dependencies**
- **Links**: EAFIT challenge repo (https://github.com/verana-labs/eafit-challenge), Hologram app (mention by name only, no URL)
- **MPAW paper**: Mentioned by title (*Verifiable Multi-Party Agent Workflows*), no link — paper in review. Link to be added upon publication.

## References

- HoloClaw paper: `/Users/samsepiol/Downloads/GithubRepos/Work/2060-io/holoclaw-paper/main.tex`
- HoloClaw bot: `/Users/samsepiol/Downloads/GithubRepos/Work/2060-io/hologram-holoclaw-bot-vs`
- EAFIT challenge: https://github.com/verana-labs/eafit-challenge
- Existing blog posts for tone reference: `content/blog/en/trust-yourself.mdx`, `content/blog/en/agentic-ai-job-search.mdx`
