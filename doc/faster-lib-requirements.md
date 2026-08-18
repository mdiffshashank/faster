# Faster UI — Component Library Requirements

> Extracted from: *Design System Web Engineer — Task Brief*
> Scope: Implementation requirements only (excludes presentation/discussion topics)

---

## 1. Overview

Build a small component library called **"Faster"** as part of a Design System.

### Components to Build
- `Button`
- `Input`
- `Dialog`

### Library Goals
- Production-ready components
- Fully tested (unit + e2e)
- Built using reusable design tokens
- Documented in Storybook with interactive controls
- Integrated with CI/CD automation

---

## 2. Tech Stack

| Tool | Purpose |
|---|---|
| React | Component framework |
| TypeScript (TSX) | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Design Tokens | Centralized colors and scalability |
| Jest + React Testing Library | Unit testing |
| Cypress | Component and interaction testing |
| Storybook | Documentation and interactive exploration |
| GitHub Actions | CI/CD automation |

---

## 3. Design Token Requirements

- **Do not** hardcode colors directly inside components
- Define **centralized color tokens** that are reusable and scalable
- Acceptable token approaches (can combine):
  - TypeScript token files
  - Tailwind theme extension (`tailwind.config`)
  - CSS Variables
- Tokens must cover:
  - Colors
  - Typography (font size, weight, line height)
  - Borders / border-radius
  - Spacing and layout

---

## 4. Component Requirements

### General (applies to all components)

- Full **TypeScript** support
- **Tailwind CSS** styling via design tokens
- **Accessibility** best practices (ARIA, keyboard nav, focus management)
- Reusable and scalable component API
- Alignment with Figma design specifications
- States to handle: `default`, `hover`, `focus`, `disabled`, `error`

---

### 4.1 Button

- All visual variants per Figma
- Disabled state
- Hover and focus states
- Consistent prop API

### 4.2 Input

- All visual variants per Figma
- Error state with messaging
- Disabled state
- Hover and focus states
- Controlled and uncontrolled usage support

### 4.3 Dialog

- Open / close behavior
- Accessible modal implementation (focus trap, `aria-modal`, ESC key close)
- Backdrop / overlay
- Header, body, footer slot structure

---

## 5. Testing Requirements

### 5.1 Jest + React Testing Library

Write tests covering:
- [ ] Component rendering
- [ ] All variants and states
- [ ] User interactions (click, type, focus)
- [ ] Accessibility where applicable

### 5.2 Cypress (Mandatory)

Write component tests covering:
- [ ] Successful mounting of each component
- [ ] Basic rendering validation
- [ ] Button interactions (click, disabled)
- [ ] Input interactions (typing, error state)
- [ ] Dialog open/close behavior

---

## 6. Storybook Requirements

- Write stories for **all component variants**
- Include states: disabled, error, interaction
- Include a **Playground story** with full control exposure (all props interactive via Storybook Controls)
- Stories must be clear, structured, and developer-friendly
- No console errors in Storybook

---

## 7. CI/CD Pipeline Requirements

### GitHub Actions Workflow

The workflow must run the following steps automatically on push/PR:

1. Install Dependencies
2. Lint
3. Type Check
4. Jest Tests
5. Cypress Tests
6. Storybook Build
7. Production Build
8. NPM Library Release

---

## 8. NPM Library Requirements

- The library must be configured for publishing as an **NPM package**
- Production build output must be a distributable package
- Release step should be part of the GitHub Actions CI/CD pipeline

---

## 9. Repository & Setup Requirements

- Publish solution to a **public GitHub repository**
- Include a `README.md` with:
  - Setup instructions
  - How to run locally
  - How to run tests
  - How to run Storybook
- Repository must be cloneable and runnable locally without manual configuration

---

## 10. Acceptance Criteria

- [ ] Components match the Figma design and specifications
- [ ] Component APIs and behavior are well-structured and consistent
- [ ] Design tokens are implemented and used consistently across all components
- [ ] All Jest tests pass
- [ ] All Cypress tests pass
- [ ] Storybook provides full control and visibility of all components
- [ ] No console errors in Storybook
- [ ] CI/CD pipeline executes successfully end-to-end
- [ ] Repository can be cloned and run locally

---

## 11. Deliverables Checklist

- [ ] GitHub Repository URL
- [ ] `README.md` with setup instructions
- [ ] Jest test files
- [ ] Cypress test files
- [ ] GitHub Actions workflow file (`.github/workflows/`)
- [ ] Distributed NPM Library

---

## 12. Reference Links

| Resource | URL |
|---|---|
| Figma Design File | [TapTap Design System](https://www.figma.com/design/WYuHdUuUq31HzkdJhoKwXl/TapTap-Design-System%E4%B8%A8Developers--Community-?node-id=12-11244&p=f&t=IdkiBp7B4GxCdKAF-0) |
| Tailwind CSS Docs | https://tailwindcss.com/docs |
| Storybook Controls | https://storybook.js.org/docs/essentials/controls |
| Cypress Component Testing | https://docs.cypress.io/guides/component-testing/overview |
| GitHub Actions | https://docs.github.com/en/actions |
