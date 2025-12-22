# AI Coding Agent Instructions for Portfolio Website

## Project Overview
This is a static HTML/CSS portfolio website with no JavaScript, build process, or external dependencies. The site consists of a single page (`excercise1.html`) styled by `excercise1.css`.

## Architecture
- **Structure**: Semantic HTML with `<header>`, `<nav>`, `<main>`-like `<div class="container">` containing `<section>` elements, and `<footer>`.
- **Sections**: `#about`, `#projects`, `#skills`, `#contact` linked from nav anchors.
- **Styling**: CSS-first approach with responsive design basics (viewport meta, max-width container).

## Key Patterns
- **Navigation**: Smooth-scroll anchors to sections; hover effects with radial gradient background and color transition.
- **Projects**: Each project in a `<div class="project">` with gray background, padding, and border-radius.
- **Image**: Profile image styled as circular (border-radius: 50%) with fixed dimensions (100x100px) and positioned via margins.
- **Typography**: Arial font, line-height 1.6, headings with bottom border and padding.
- **Colors**: Dark theme (#333 background, white text) for header/nav/footer; light gray (#f4f4f4) for project cards.

## Development Workflow
- Edit HTML in `excercise1.html` and CSS in `excercise1.css`.
- Test by opening `excercise1.html` in a browser; no server or build required.
- Add new sections: Insert `<section id="new">` inside `.container`, add nav link `<a href="#new">New</a>`, style in CSS if needed.

## Conventions
- CSS reset: `* { margin: 0; padding: 0; box-sizing: border-box; }`
- Units: rem for spacing, px for fixed sizes.
- Class naming: Semantic (e.g., `.project`) or element-based.
- No preprocessors or frameworks; vanilla HTML/CSS.

## Examples
- To add a new project: Copy a `.project` div in `#projects` section, update content.
- To style a new element: Follow existing patterns, e.g., for cards use background, padding, border-radius like `.project`.

Reference files: [excercise1.html](excercise1.html), [excercise1.css](excercise1.css)