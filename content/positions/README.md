# Positions Content

This folder contains markdown files for open positions. Each markdown file should follow this structure:

## Frontmatter (YAML)

```yaml
---
title: "Position Title"
department: "Department Name"
location: "Remote / Hybrid"
type: "Full-time"
description: "Brief description of the position"
requirements:
  - "Requirement 1"
  - "Requirement 2"
  - "Requirement 3"
skills:
  - "Skill 1"
  - "Skill 2"
  - "Skill 3"
---
```

## Content

The main content should be written in Markdown format below the frontmatter. This will be displayed on the position detail page.

## File Naming

Use kebab-case for filenames, e.g., `senior-web-developer.md`

The filename (without .md) will be used as the slug for the URL: `/careers/senior-web-developer`

