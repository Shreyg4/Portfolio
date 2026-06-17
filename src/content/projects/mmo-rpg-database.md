---
title: MMO RPG Database Design
oneLiner: "Backend for a persistent MMO RPG — Java/JDBC APIs for real-time character stats, quest tracking, and automated state management."
role: "Team of 4."
timeframe: "Feb–Mar 2026"
date: 2026-03-15
status: "complete"
stack: [Java, JDBC, PostgreSQL, SQL]
featured: true
# TODO (owner): repo likely "schemasquad" — add verified URL before launch.
links: {}
---

## Problem
Persistent, consistent game state with complex relational queries.

## Approach
Java JDBC APIs with advanced SQL JOINs across Quest / Character / Progress; PostgreSQL sequence correction and server-side validation (current ≤ max).

## Result
Prevented duplicate-key errors, guaranteed stat integrity, and enabled dynamic active/completed quest filtering.
