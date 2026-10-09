---
target: static/index.html
total_score: 24
p0_count: 1
p1_count: 2
timestamp: 2026-10-07T17-51-07Z
slug: static-index-html
---
Method: ⚠️ DEGRADED: single-context (Sub-agent quota exhausted, manual fallback)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | CTA buttons are clear but interactions are missing |
| 2 | Match System / Real World | 3 | Uses appropriate terminology ("报告", "档案") |
| 3 | User Control and Freedom | 3 | n/a |
| 4 | Consistency and Standards | 1 | 17 missing CSS tokens cause styles to silently break |
| 5 | Error Prevention | 3 | n/a |
| 6 | Recognition Rather Than Recall | 3 | n/a |
| 7 | Flexibility and Efficiency | 2 | Missing focus rings/keyboard nav due to undefined tokens |
| 8 | Aesthetic and Minimalist Design | 2 | Heavy reliance on AI-slop numbered scaffolding |
| 9 | Error Recovery | 2 | n/a |
| 10 | Help and Documentation | 2 | n/a |
| **Total** | | **24/40** | **Acceptable** |

### Anti-Patterns Verdict

**LLM assessment**: Yes, this has clear AI-slop traits. The most prominent is the **numbered section marker reflex (01/02/03)** used universally as scaffolding (in hero tags, the "what you will get" grid, and step indicators), which feels rigid and artificial rather than deliberate. Second, the **identical card grids** for the four scenarios strip away visual hierarchy, making it look like a default SaaS template rather than a thoughtful editorial layout. Finally, the use of **side-stripe borders** on cards and notices is a lazy decorative move that contradicts the "plant specimen" restraint.

**Deterministic scan**: The detector caught 7 rule violations, confirming the **side-tab** borders (4 instances) and **numbered-section-markers**. Most critically, it found **17 undefined CSS variables** being heavily used in the stylesheet (like `--button-radius`, `--motion-ease`, `--sb-border-subtle`). This means the design is technically broken in many subtle ways—focus rings are gone, transitions don't fire, and letter-spacing is lost. It also flagged arbitrary z-index values (9999, 2200).

**Visual overlays**: Overlay step skipped. No browser automation tool is available, so script injection was not possible.

### Overall Impression
The foundational layout has a clean structure, but the execution is severely compromised by missing CSS tokens (leaving it without animations, focus rings, or correct radii) and cluttered with AI-generated cliches (numbered scaffolding, side-stripe borders, repetitive cards). Fixing the broken tokens and stripping the "slop" will let the intended "oriental specimen" aesthetic actually emerge.

### What's Working
- **Color Discipline**: The green-and-cream palette effectively avoids the typical stark white-and-blue SaaS feel, aligning well with the desired physical-material aesthetic.
- **Typography Sizing**: The scale and contrast of the hero typography generally establish a clear hierarchy, even if the tracking/letter-spacing is broken by missing tokens.

### Priority Issues

- **[P0] 17 undefined CSS variables causing silent UI failures**
  - **Why it matters**: Tokens like `--button-radius`, `--motion-ease`, and `--sb-green-tint` are used but never declared. As a result, focus rings are completely invisible (failing a11y), transitions don't work, and intended rounded corners fall back to sharp edges.
  - **Fix**: Declare all 17 missing variables in the `:root` of `style.css` with appropriate values based on the design system.
  - **Suggested command**: `/impeccable harden`

- **[P1] AI Slop: Unnecessary numbered scaffolding (01/02/03)**
  - **Why it matters**: Treating everything as a numbered list (hero chips, feature grids) is a dead giveaway of AI generation. It adds visual noise without adding meaning, breaking the calm, specimen-like aesthetic.
  - **Fix**: Remove the numbers from the "一份怎样的报告" grid and the hero tags. Reserve numbers exclusively for genuine sequential steps.
  - **Suggested command**: `/impeccable quieter`

- **[P1] Absolute Ban: Side-stripe borders on cards**
  - **Why it matters**: Using `border-left` on the scenario cards and notices is a cheap, overused SaaS pattern that undermines the premium editorial feel you're aiming for.
  - **Fix**: Remove the `border-left` styles. Rely on subtle full borders, background tints, or typography to define the boundaries of these surfaces.
  - **Suggested command**: `/impeccable polish`

- **[P2] Mobile horizontal clipping and overflow**
  - **Why it matters**: The layout appears to push elements (like the hero H1 and cards) off the right edge on narrow screens, causing horizontal scroll or clipping.
  - **Fix**: Review responsive media queries, clamp values, and flex/grid bounds to ensure content reflows correctly down to 320px.
  - **Suggested command**: `/impeccable adapt`

### Persona Red Flags

**Jordan (First-Timer)**: The four identical scenario cards flatten the information hierarchy, making it harder to decide where to click first. Everything looks equally (un)important.

**Sam (Accessibility-Dependent)**: The invisible focus rings (caused by the missing `--sb-green-tint` variable combined with `outline: none`) mean Sam has absolutely no way to know which element is currently focused when navigating by keyboard. This is a critical blocker.

**Casey (Distracted Mobile User)**: The horizontal text clipping on mobile will frustrate reading, and the identical card grid will force extra scrolling.

### Minor Observations
- There are multiple conflicting font-family declarations (`--font-sans` vs `--sb-font-family`), creating parallel token systems.
- Arbitrary z-index values like `9999` and `2200` are used, which will cause stacking context nightmares later.

### Questions to Consider
- If you stripped away all the numbers and side-borders, what typographical or spacing choices could you use instead to establish the "botanical specimen" feel?
- Could the four scenario options be presented as a refined editorial list or menu rather than a repetitive grid of cards?
