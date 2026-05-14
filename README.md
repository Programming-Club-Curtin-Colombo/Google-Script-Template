# Google Script Template

A professional, clean, and highly modular template for Google Apps Script projects.

## Overview
This repository provides a foundational structure for building robust Google Apps Script applications (Web Apps, API integrations, or Add-ons) with modern development practices including linting, formatting, and local deployment support.

## Features
- **Local Development:** Sync with Google Apps Script using `clasp`.
- **Code Quality:** Pre-configured ESLint and Prettier for maintaining high standards.
- **Documentation:** Built-in templates for Architecture, API, and Contribution guides.
- **Governance:** Standardized issue templates and security policies.

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Clasp:**
   - Log in to Clasp: `npx clasp login`
   - Update `.clasp.json` with your `scriptId`.
   - **Note:** Ensure "Google Apps Script API" is enabled in your [Google Apps Script Settings](https://script.google.com/home/usersettings).
   - Push your code: `npx clasp push`
4. **Follow the instructions** in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Project Structure
- `.github/`: CI/CD workflows, issue templates, and security policy.
- `src/`: Google Apps Script source files and manifest.
  - `appsscript.json`: Manifest file.
  - `Code.gs`: Entry layer.
  - `Services.gs`: Business logic layer.
  - `Utils.gs`: Helper layer.
  - `Config.gs`: Configuration layer.
  - `Triggers.gs`: Event layer.
  - `Api.gs`: External integration layer (optional).
  - `tests/`: Project tests.
- `.clasp.json`: Clasp configuration for local development.
- `ARCHITECTURE.md`: High-level system design.
- `API.md`: Documentation for API endpoints or interfaces.
- `CONTRIBUTING.md`: Guidelines for contributors.

## License
[Insert License Here]
