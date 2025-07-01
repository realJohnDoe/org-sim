# Tech Context: Organizational Simulation

## Technologies Used
- **TypeScript**: Core language for development, providing type safety and supporting functional programming paradigms with strong typing for immutable data structures.
- **React**: Framework for building the declarative user interface, enabling efficient rendering of simulation states and user controls.
- **D3.js**: Library for data-driven visualizations, used to render organizational graphs and project n-dimensional vectors into 2D/3D visual representations.
- **Vite**: Build tool for fast development cycles, bundling, and deployment, specifically configured for React and TypeScript projects targeting GitHub Pages.
- **Jest**: Testing framework for unit and integration tests, ensuring the correctness of pure functions and state transformations in the simulation logic.

## Development Setup
- **Node.js and npm**: Environment for running TypeScript, managing dependencies, and executing build scripts. Node.js version should be compatible with Vite and React (e.g., LTS version 16 or higher).
- **Project Initialization**: Use Vite to scaffold a new React + TypeScript project, with configuration for GitHub Pages deployment via the `vite-plugin-gh-pages` or similar plugin.
- **Editor**: Recommended to use Visual Studio Code with extensions for TypeScript, React, and Markdown for editing code and Memory Bank documentation.
- **Version Control**: Git for tracking changes, with commits structured to separate meta, structural, and behavioral changes as per Tidy First principles.
- **Testing Setup**: Jest configured for TypeScript, with test files colocated with source files or in a dedicated `tests/` directory, running automatically on code changes during development.

## Technical Constraints
- **Browser Compatibility**: The simulation must run on modern web browsers (Chrome, Firefox, Edge) without requiring additional plugins, targeting deployment on GitHub Pages.
- **Performance**: Simulation logic must be optimized for organizations of 5 to 100 agents, handling n-dimensional calculations (dimensions 2-10) efficiently to maintain smooth visualization updates.
- **Dimensionality Limits**: Goal, idea, and capability vectors constrained to 2-10 dimensions to keep computational complexity manageable and visualizations interpretable.
- **State Immutability**: All state transformations must adhere to functional programming principles, avoiding direct mutations as a best practice to ensure predictability and testability.
- **Visualization Projection**: N-dimensional data must be projected to 2D or 3D for display, using techniques like PCA (Principal Component Analysis) or simpler axis selection within D3.js to maintain user comprehension.

## Dependencies
- **Core Dependencies**: 
  - `react`, `react-dom`: For UI rendering.
  - `typescript`: For type-safe development.
  - `vite`: For project build and development server.
  - `d3`: For data visualization.
- **Testing Dependencies**: 
  - `jest`, `@testing-library/react`, `@types/jest`: For unit and integration testing.
- **Development Dependencies**: 
  - `@vitejs/plugin-react`: For React support in Vite.
  - `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`: For linting and maintaining code quality.

## Tool Usage Patterns
- **Vite Workflow**: Use `npm run dev` for local development with hot reloading, `npm run build` for production builds, and a custom script for deploying to GitHub Pages.
- **Jest Testing**: Tests run with `npm test`, focusing on pure function outputs for given state inputs, ensuring simulation logic correctness before UI integration.
- **TypeScript Compilation**: Configured with strict type checking in `tsconfig.json` to enforce functional programming patterns and prevent runtime errors.
- **React Components**: Developed declaratively, mapping simulation state to UI elements, with minimal local state to maintain functional purity.
- **D3.js Integration**: Used within React components via hooks or lifecycle methods to bind simulation data to SVG elements, ensuring visualizations update with state changes.
- **Documentation Updates**: Memory Bank files updated after significant changes or user requests using Markdown, with VSCode or similar editors for easy editing and preview.
