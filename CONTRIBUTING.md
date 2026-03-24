# 🤝 Contributing to Portfolio

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guide](#style-guide)
- [Commit Messages](#commit-messages)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🛠️ How Can I Contribute?

### 🐛 Reporting Bugs

- Use the [bug report template](https://github.com/vismayIO/portfolio/issues/new?template=bug_report.md)
- Include steps to reproduce the issue
- Include screenshots if applicable
- Mention your browser and OS

### 💡 Suggesting Features

- Use the [feature request template](https://github.com/vismayIO/portfolio/issues/new?template=feature_request.md)
- Describe the problem you're trying to solve
- Explain how your suggestion would work

### 🔧 Pull Requests

1. Fork the repo and create your branch from `main`
2. Install dependencies with `bun install`
3. Make your changes
4. Ensure linting passes with `bun run lint`
5. Format your code with `bun run format`
6. Submit your pull request

## 💻 Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
bun install

# Start dev server
bun dev
```

## 🎨 Style Guide

- **TypeScript** — Strict mode enabled
- **Formatting** — Handled by [Biome](https://biomejs.dev/)
- **Linting** — Run `bun run lint` before committing
- **CSS** — Use Tailwind CSS utility classes

## 📝 Commit Messages

Use clear and meaningful commit messages:

- `feat: add hero section`
- `fix: resolve mobile nav overflow`
- `docs: update README`
- `style: format with biome`
- `refactor: simplify layout component`

---

Thank you for contributing! 🙌
