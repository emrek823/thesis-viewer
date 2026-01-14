---
type: research
topic: "BioFit Technical Specification & Bootstrap Plan"
date: 2026-01-13
---

# BioFit: Technical Specification & Bootstrap Plan

## What You Asked

1. Get way more specific on the product
2. How to actually build it
3. What can you do NOW to bootstrap
4. Are there public records or design templates?

---

# Part 1: The Product - Specific Technical Spec

## What It Actually Is

**A web-based constraint solver that generates GMP-compliant facility floor plans.**

Not AI. Not ML. Deterministic algorithms (like TestFit) that:
1. Take inputs (site shape, process type, capacity)
2. Apply constraint rules (GMP grades, flow requirements, equipment clearances)
3. Generate all valid configurations
4. Rank by cost/timeline/flexibility

## Core Technical Components

### 1. Site Geometry Engine
```
INPUT:
- Building footprint (DXF/DWG import or draw polygon)
- Floor-to-floor height
- Number of floors
- Column grid (if brownfield)
- Entry/exit points

OUTPUT:
- Buildable zone polygon
- Structural grid overlay
- Vertical circulation zones (stairs, elevators)
```

### 2. Process Template Library
```
TEMPLATE: mAb_production_fed_batch
├── zones:
│   ├── media_prep (ISO 8, 200-500 sq ft)
│   ├── seed_train (ISO 7, 300-600 sq ft)
│   ├── production (ISO 7, 800-2000 sq ft)
│   ├── harvest (ISO 7, 400-800 sq ft)
│   ├── purification (ISO 7, 600-1200 sq ft)
│   ├── fill_finish (ISO 5, 400-1000 sq ft)
│   ├── qc_lab (ISO 8, 300-600 sq ft)
│   └── warehouse (unclassified, 500-2000 sq ft)
├── flow_constraints:
│   ├── personnel: gowning_cascade → production → degowning
│   ├── material: receiving → staging → process → shipping
│   └── waste: process → inactivation → disposal
└── adjacency_requirements:
    ├── media_prep ADJACENT_TO seed_train
    ├── seed_train ADJACENT_TO production
    ├── fill_finish REQUIRES Grade_A_background
    └── qc_lab NOT_ADJACENT_TO production
```

### 3. Constraint Engine (The Hard Part)

**Regulatory Constraints (from EU Annex 1 + FDA guidance):**

| Rule ID | Constraint | Source |
|---------|------------|--------|
| REG-001 | Grade A requires unidirectional airflow ≥0.36 m/s | Annex 1 §4.10 |
| REG-002 | Grade B background for Grade A operations | Annex 1 §4.3 |
| REG-003 | Minimum +10-15 Pa pressure differential between grades | Annex 1 §4.19 |
| REG-004 | Personnel airlocks between Grade C and unclassified | Annex 1 §4.16 |
| REG-005 | Material pass-through between different grades | Annex 1 §4.15 |
| REG-006 | Minimum 20 air changes/hour for ISO 8 | FDA Aseptic Guide |
| REG-007 | No backflow of personnel without re-gowning | FDA Aseptic Guide |

**Spatial Constraints:**

| Rule ID | Constraint | Value |
|---------|------------|-------|
| SPA-001 | Minimum corridor width | 1.8m (6 ft) |
| SPA-002 | Equipment clearance (front) | 1.2m (4 ft) |
| SPA-003 | Equipment clearance (service) | 0.9m (3 ft) |
| SPA-004 | Airlock minimum dimension | 2.4m × 1.8m |
| SPA-005 | Gowning room per personnel | 1.5 sq m/person |
| SPA-006 | Emergency egress distance | ≤60m to exit |

**Equipment Footprint Library:**

| Equipment | Model | Footprint (W×D×H) | Clearance | Utilities |
|-----------|-------|-------------------|-----------|-----------|
| 50L SUB | Sartorius STR 50 | 0.8m × 1.0m × 1.8m | Front: 1.2m | WFI, CDA |
| 200L SUB | Sartorius STR 200 | 1.2m × 1.4m × 2.2m | Front: 1.5m | WFI, CDA |
| 500L SUB | Cytiva XDR-500 | 1.5m × 1.8m × 2.5m | Front: 1.8m | WFI, CDA |
| 2000L SUB | Cytiva XDR-2000 | 2.5m × 3.0m × 4.0m | All: 2.0m | WFI, CDA, Steam |
| Chrom Skid | ÄKTA ready | 1.2m × 0.8m × 1.8m | Front: 1.2m | Buffer lines |
| TFF System | Cytiva UFDF | 1.0m × 0.8m × 1.5m | Front: 1.0m | WFI |

### 4. Layout Generation Algorithm

**Approach: Constraint Satisfaction Problem (CSP) + Genetic Optimization**

```python
# Pseudocode for layout generation

class BioFitSolver:
    def generate_layouts(self, site, process_template, count=100):
        # Step 1: Zone placement (CSP)
        valid_placements = self.place_zones(
            site=site,
            zones=process_template.zones,
            adjacencies=process_template.adjacency_requirements
        )

        # Step 2: Flow routing
        for placement in valid_placements:
            placement.personnel_flow = self.route_flow(
                zones=placement.zones,
                constraints=process_template.flow_constraints.personnel
            )
            placement.material_flow = self.route_flow(
                zones=placement.zones,
                constraints=process_template.flow_constraints.material
            )

        # Step 3: Equipment placement within zones
        for placement in valid_placements:
            for zone in placement.zones:
                zone.equipment_layout = self.place_equipment(
                    zone=zone,
                    equipment=process_template.equipment[zone.type],
                    clearances=SPATIAL_CONSTRAINTS
                )

        # Step 4: Score and rank
        scored = []
        for layout in valid_placements:
            score = self.calculate_score(
                layout,
                weights={
                    'cost_per_sqft': 0.3,
                    'flow_efficiency': 0.2,
                    'expansion_capacity': 0.2,
                    'timeline_to_operational': 0.3
                }
            )
            scored.append((layout, score))

        return sorted(scored, key=lambda x: x[1], reverse=True)[:count]
```

### 5. Output Layer

**Generated Artifacts:**
- 2D floor plan (SVG, DXF, PDF)
- Zone classification overlay
- Personnel flow diagram
- Material flow diagram
- Equipment placement plan
- Utility rough-in locations
- Cost estimate by zone
- Bill of materials (walls, doors, HVAC)

---

# Part 2: How to Build It

## Technical Stack

| Layer | Technology | Why |
|-------|------------|-----|
| Frontend | React + Canvas/SVG | Interactive floor plan editing |
| Geometry Engine | Rust + WASM | Performance for constraint solving |
| Constraint Solver | OR-Tools or custom CSP | Google's proven constraint solver |
| Backend | Python/FastAPI | ML-ready, quick iteration |
| Database | PostgreSQL + PostGIS | Spatial queries |
| CAD Export | ezdxf (Python) | DXF generation |
| File Storage | S3 | DWG imports, exports |

## Development Phases

### Phase 0: Proof of Concept (2-4 weeks, solo)
**Goal:** Generate ONE valid mAb facility layout from constraints

- Hardcode a single site (100' × 150' rectangle)
- Hardcode mAb process template
- Implement basic zone placement
- Output: PNG/SVG floor plan with zones colored by grade
- **This proves the concept works**

### Phase 1: MVP (3-4 months, 2-3 engineers)
**Goal:** Interactive tool that generates multiple layouts

- Site geometry import (DXF)
- 3 process templates (mAb, cell therapy, fill/finish)
- Constraint engine with 20-30 core rules
- Ranking by cost estimate
- Export to PDF

### Phase 2: Product (6-9 months, 4-5 engineers)
**Goal:** Production-ready for pilot customers

- Equipment library (50+ items)
- Full constraint library (100+ rules)
- DWG/Revit export
- Cost modeling integration
- Multi-floor support
- Collaboration features

## Build vs. Buy Components

| Component | Build | Buy/Use |
|-----------|-------|---------|
| Constraint solver | ❌ | OR-Tools (free, Google) |
| Geometry operations | ❌ | Shapely/CGAL (free) |
| DXF parsing | ❌ | ezdxf (free) |
| UI framework | ❌ | React (free) |
| Constraint rules | ✅ | Must encode yourself |
| Process templates | ✅ | Must build yourself |
| Equipment library | ✅ | From public datasheets |

---

# Part 3: What You Can Do NOW (Bootstrap Resources)

## FREE Regulatory Documents

### 1. EU Annex 1 (2022) - THE KEY DOCUMENT
**URL:** https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf

59 pages of encodable rules including:
- Cleanroom classifications (Grade A/B/C/D)
- Air change requirements
- Pressure differentials
- Personnel flow requirements
- Material transfer requirements
- Gowning room specifications

### 2. FDA Aseptic Processing Guidance
**URL:** https://www.fda.gov/media/71026/download

Covers:
- Facility design principles
- Cleanroom classifications
- Personnel and material flow
- Environmental monitoring requirements

### 3. FDA cGMP for Finished Pharmaceuticals
**URL:** https://www.fda.gov/media/88905/download

21 CFR Part 211 requirements

### 4. ISO 14644 (Cleanroom Standards)
- ISO 14644-1: Classification
- ISO 14644-4: Design, construction, start-up
- *Note: ISO standards cost $$$, but summaries are widely available*

## FREE CAD Resources

### Cleanroom Layout Templates
| Source | URL | What's There |
|--------|-----|--------------|
| ARCAT | arcat.com/content-type/cad/special-construction-13/clean-rooms-132113 | Free DWG blocks |
| CADdetails | caddetails.com/cad-drawings/oc/clean-rooms/ | Manufacturer CAD |
| LibreriaCAD | libreriacad.com/en/dwg/clean-room/ | Basic cleanroom DWG |
| GrabCAD | grabcad.com/library/tag/cleanroom | 3D models |
| Plan n Design | planndesign.com/collection/1170-pharmaceutical-factory-layout-and-structure | Pharma factory layout |

### Equipment Datasheets (with dimensions)
| Vendor | URL | Equipment |
|--------|-----|-----------|
| Sartorius | sartorius.com/download/... | Biostat STR series |
| Cytiva | cdn.cytivalifesciences.com/... | XDR bioreactors, WAVE |
| Pall | pall.com/biotech | Allegro SUB systems |
| Thermo Fisher | thermofisher.com/bioproduction | HyPerforma SUBs |

*Most vendors provide free datasheets with footprint dimensions*

## FREE Open Source Tools

### Constraint Solvers
| Tool | URL | Use Case |
|------|-----|----------|
| Google OR-Tools | github.com/google/or-tools | CSP solver, scheduling |
| Z3 | github.com/Z3Prover/z3 | SMT solver |
| MiniZinc | minizinc.org | Constraint modeling language |

### Geometry Libraries
| Tool | Language | Use Case |
|------|----------|----------|
| Shapely | Python | 2D geometry operations |
| CGAL | C++ | Computational geometry |
| Clipper | C++ | Polygon clipping |
| earcut | JS | Polygon triangulation |

### CAD Libraries
| Tool | Language | Use Case |
|------|----------|----------|
| ezdxf | Python | Read/write DXF |
| Open CASCADE | C++ | Full CAD kernel |
| three.js | JS | 3D visualization |

## PUBLIC RECORDS HACK

**Building permits are public records.** You can request floor plans for existing pharma facilities:

### How to Find Them
1. Identify major pharma facility locations (RTP, Boston, San Diego, SF Bay Area)
2. Search county permit databases:
   - Wake County NC (RTP): wakegov.com/permits
   - Middlesex County MA (Boston): middlesexcountynj.gov
   - San Diego County: sandiegocounty.gov/pds
3. Request construction documents via public records request
4. Many jurisdictions now have online portals

### What You'll Get
- Site plans
- Floor plans
- HVAC diagrams
- Electrical layouts
- *Interior cleanroom layouts may be redacted for security*

### Best Targets
- State university biotech facilities (fully public)
- Community college pharma tech programs
- Government-funded research facilities

---

# Part 4: Realistic 90-Day Bootstrap Plan

## Week 1-2: Constraint Library Foundation

**Do This:**
1. Download and read EU Annex 1 (59 pages) - highlight every encodable rule
2. Download FDA Aseptic Processing guidance - do the same
3. Create spreadsheet: Rule ID | Rule Text | Parameters | Source

**Output:** 50-100 constraint rules in structured format

## Week 3-4: Equipment Database

**Do This:**
1. Download datasheets from Sartorius, Cytiva, Pall, Thermo
2. Extract: Equipment name, footprint (W×D×H), utility requirements, clearances
3. Organize by process stage (upstream, downstream, fill/finish)

**Output:** Equipment library with 30-50 items

## Week 5-6: Process Templates

**Do This:**
1. Research standard mAb production workflows
2. Map zones: media prep → seed → production → harvest → purification → fill
3. Define zone size ranges, classification requirements, adjacencies
4. Create 2-3 process templates in JSON format

**Output:** 3 process templates (mAb, cell therapy, fill/finish)

## Week 7-8: Proof of Concept Code

**Do This:**
1. Set up Python project with Shapely, OR-Tools
2. Implement basic zone placement on rectangular site
3. Add constraint checking (adjacency, flow)
4. Generate SVG output showing zones

**Output:** Script that generates valid floor plans (even ugly ones)

## Week 9-10: CAD Integration

**Do This:**
1. Add ezdxf for DXF export
2. Import sample DXF site file
3. Export generated layouts to DXF

**Output:** DXF files that open in AutoCAD

## Week 11-12: Demo & Pitch

**Do This:**
1. Build simple web UI (React) around the solver
2. Create 3 demo scenarios
3. Record demo video
4. Reach out to Arco Murray contact

**Output:** Working demo, pitch deck, intro meeting

---

# Part 5: What Makes This Hard (Honest Assessment)

## Technical Challenges

| Challenge | Difficulty | Mitigation |
|-----------|------------|------------|
| Constraint explosion | High | Start with minimal rules, add incrementally |
| Performance at scale | Medium | Rust/WASM for solver, limit iteration count |
| CAD interoperability | Medium | Focus on DXF first, Revit later |
| Equipment library maintenance | Ongoing | Partner with vendors for data |

## Domain Challenges

| Challenge | Difficulty | Mitigation |
|-----------|------------|------------|
| GMP expertise required | High | Hire consultant, partner with D-B firm |
| Rules interpretation | High | Validate with actual engineers |
| Liability for compliance | High | Disclaimers, PE sign-off required |

## Market Challenges

| Challenge | Difficulty | Mitigation |
|-----------|------------|------------|
| Long sales cycles | High | Start with smaller projects |
| Conservative industry | High | Pilot with innovative D-B firm |
| Trust in software | Medium | Generate "options" not "answers" |

---

# Part 6: First Customer Conversation Script

**Target:** Arco Murray Life Sciences team (or similar D-B firm)

**Opening:**
> "I'm building a tool that does for GMP facility layout what TestFit does for multifamily. Generate hundreds of compliant configurations in seconds instead of weeks of manual CAD work."

**The Demo:**
1. Show a site footprint
2. Select "mAb production, 500L scale"
3. Generate 50 layouts in 10 seconds
4. Filter by cost/sq ft
5. Export top 3 to DXF

**The Ask:**
> "I need two things: (1) Access to a real engineer to validate my constraint library, and (2) A past project to use as a test case. In return, you get early access to a tool that could give you a massive competitive advantage."

**Why They Say Yes:**
- Zero risk (just engineer time)
- First-mover advantage
- You're making THEIR job easier

---

## Summary: What's Actually Available

| Resource | Status | Where |
|----------|--------|-------|
| GMP facility rules | **FREE** | EU Annex 1 PDF, FDA guidance |
| Equipment dimensions | **FREE** | Vendor datasheets |
| CAD templates | **FREE** | ARCAT, GrabCAD, etc. |
| Constraint solvers | **FREE** | OR-Tools, Z3 |
| Geometry libraries | **FREE** | Shapely, CGAL |
| Real facility plans | **PUBLIC RECORDS** | County permit offices |
| ISPE Baseline Guides | **$400-600** | Must purchase |
| Domain expertise | **EXPENSIVE** | Need consultant or partner |

**Bottom line:** You can build a proof of concept for $0 in software costs. The constraint library (the hard part) can be 80% built from free public documents. The remaining 20% requires domain expertise—which is why partnering with Arco Murray (or similar) is the play.
