# React

## Overview

React is a JavaScript library for building user interfaces for web and native platforms. This repository contains the core React library, the React DOM renderer, React Native renderer, the React Compiler (experimental), and the React DevTools suite. The project is structured as a monorepo using Yarn workspaces, housing multiple packages ranging from core rendering logic to testing utilities and development tooling.

## Features

*   **Declarative UI:** Enables building complex UIs from simple state using a declarative component model.
*   **React Compiler:** An experimental compiler (`compiler/`) that automatically memoizes components and hooks, optimizing re-renders without manual `useMemo` or `useCallback`.
*   **Server Components:** Support for React Server Components (RSC) via packages like `react-server-dom-webpack`, `react-server-dom-esm`, and `react-server-dom-turbopack`.
*   **DevTools:** A comprehensive suite of debugging tools including browser extensions (`packages/react-devtools-extensions`), inline integration (`packages/react-devtools-inline`), and a standalone desktop app (`packages/react-devtools`).
*   **Testing Utilities:** Includes `react-test-renderer` for snapshot testing, `jest-react` for Jest matchers, and `react-suspense-test-utils`.
*   **Hooks Linting:** `eslint-plugin-react-hooks` enforces the Rules of Hooks.
*   **Legacy Support:** Fixtures and runtimes for legacy JSX transformations (`fixtures/legacy-jsx-runtimes`).

## Architecture

The repository is organized into distinct functional areas:

*   **Core Library:** The `packages/react` directory contains the core React API, including JSX runtime, hooks, and context. It relies on `packages/scheduler` for cooperative scheduling and `packages/shared` for common utilities.
*   **Renderers:**
    *   **DOM:** `packages/react-dom` and `packages/react-dom-bindings` handle browser DOM interactions, events, and hydration.
    *   **Native:** `packages/react-native-renderer` provides the bridge to native mobile components.
    *   **Test:** `packages/react-test-renderer` and `packages/react-noop-renderer` allow for headless and testing-specific rendering.
*   **React Compiler:** Located in the `compiler/` directory, this subsystem includes:
    *   **Babel Plugin:** `compiler/packages/babel-plugin-react-compiler` transforms React code to enable automatic memoization.
    *   **Rust Backend:** `compiler/crates/` contains the Rust-based compiler implementation, including HIR (High-level Intermediate Representation), SSA (Static Single Assignment), and optimization passes.
    *   **Validation:** `compiler/packages/eslint-plugin-react-compiler` provides linting rules to catch violations of React's compilation rules.
    *   **Runtime:** `compiler/packages/react-compiler-runtime` provides necessary runtime helpers for compiled code.
*   **Server Components:** Multiple packages handle server-side rendering and streaming for different bundlers:
    *   `packages/react-server-dom-webpack`: Bindings for Webpack.
    *   `packages/react-server-dom-esm`: Bindings for ESM.
    *   `packages/react-server-dom-turbopack`: Bindings for Turbopack.
    *   `packages/react-server`: Core logic for streaming server renderers.
*   **DevTools:**
    *   `packages/react-devtools-shared`: Shared backend logic for DevTools.
    *   `packages/react-devtools-core`: Standalone backend for external tools.
    *   `packages/react-devtools-timeline`: Profiling and timeline visualization.

## Tech Stack

*   **Languages:** JavaScript, TypeScript, Rust (for the React Compiler).
*   **Build Tools:**
    *   **Bundlers:** Webpack (`fixtures/flight`, `packages/react-devtools-*`), Parcel (`fixtures/flight-parcel`, `packages/react-server-dom-parcel`).
    *   **Compilers:** Babel (`scripts/babel`, `packages/*`), TypeScript (`tsconfig.json` files throughout), Rollup (`packages/react-devtools-cdt-mcp`).
    *   **Rust Tooling:** Cargo (implied by `compiler/crates` structure).
*   **Testing Frameworks:** Jest (`scripts/jest`, `packages/*`), Playwright (`compiler/apps/playground`, `fixtures/flight`).
*   **Package Manager:** Yarn (Workspaces).
*   **Linting:** ESLint (`packages/eslint-plugin-react-hooks`, `scripts/eslint-rules`).
*   **Flow:** Flow type checker (`flow-typed`, `scripts/flow`).

## Project Structure

```text
.
├── compiler/                 # React Compiler (Experimental)
│   ├── crates/               # Rust implementation of the compiler
│   ├── packages/             # Babel plugin, ESLint plugin, Runtime
│   └── apps/playground/      # Interactive playground for the compiler
├── fixtures/                 # Test applications and benchmarks
│   ├── flight/               # React Server Components examples
│   ├── dom/                  # DOM behavior tests
│   └── packaging/            # Bundler compatibility tests
├── packages/                 # Core packages
│   ├── react/                # Core library
│   ├── react-dom/            # DOM renderer
│   ├── react-server-dom-*    # Server Components bindings
│   ├── react-devtools-*      # Developer tools
│   ├── eslint-plugin-react-hooks
│   └── scheduler/            # Scheduling API
├── scripts/                  # Build, release, and testing scripts
│   ├── jest/                 # Jest configuration
│   ├── rollup/               # Rollup configuration
│   └── release/              # Release automation
└── flow-typed/               # Flow type definitions
```

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/react/react.git
    cd react
    ```
2.  **Install dependencies:**
    The project uses Yarn workspaces.
    ```bash
    yarn install
    ```
3.  **Build the project:**
    ```bash
    yarn build
    ```

## Configuration

*   **Babel:** Configured via `babel.config.js` and `babel.config-react-compiler.js` in the root and compiler directories.
*   **TypeScript:** Configured via `tsconfig.json` files in various packages (e.g., `compiler/packages/babel-plugin-react-compiler/tsconfig.json`).
*   **Flow:** Configured via `.flowconfig` and `flow-typed.config.json`.
*   **ESLint:** Configured via `.eslintrc` and `eslint.config.ts` in specific fixtures and packages.
*   **Playwright:** Configured in `compiler/apps/playground/playwright.config.js` and `fixtures/flight/playwright.config.js`.

## Usage

### Building Packages
To build specific packages or the entire monorepo:
```bash
# Build all packages
yarn build

# Build the React Compiler
cd compiler
yarn build
```

### Running Tests
Tests are executed using Jest and Playwright.
```bash
# Run Jest tests
yarn test

# Run compiler tests
cd compiler
yarn test

# Run Playwright E2E tests
cd compiler/apps/playground
yarn test
```

### Developing the Compiler
To run the compiler playground locally:
```bash
cd compiler
yarn dev
```

### Using React DevTools
To run the standalone DevTools:
```bash
yarn workspace react-devtools start
```

## Workflow

1.  **Development:** Changes are made in the `packages/` or `compiler/` directories.
2.  **Testing:**
    *   Unit tests are run via Jest (`yarn test`).
    *   Compiler correctness is verified via snapshot testing using the `snap` tool (`compiler/packages/snap`).
    *   E2E tests are run via Playwright.
3.  **Linting:** Code is linted using ESLint and Flow.
4.  **Building:** The `scripts/rollup` and `scripts/babel` configurations are used to bundle packages for distribution.
5.  **Release:** The `scripts/release` directory contains automation for publishing packages to npm.

## Future Improvements

*   **Compiler Stability:** The React Compiler (`compiler/`) is marked as experimental. Future work involves stabilizing the Rust backend (`compiler/crates`) and expanding the pass list documented in `compiler/packages/babel-plugin-react-compiler/docs/passes/`.
*   **Server Components:** Continued integration of Server Components across different bundlers (Webpack, Turbopack, Parcel, ESM).
*   **DevTools Integration:** Enhancing the Model Context Protocol (MCP) server (`packages/react-mcp-server`) and Chrome DevTools integration (`packages/react-devtools-cdt-mcp`).