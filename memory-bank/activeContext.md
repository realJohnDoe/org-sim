# Active Context for Organizational Simulation

## Current Focus
- Successfully implemented the visualization of organizational structures using D3.js in the `OrganizationGraph` component.
- Focus on integrating the visualization component into the main application for real-time rendering of organizational changes.
- Updating Memory Bank documentation to reflect new understanding of agent models, including supply trees for capabilities, demand models as trees, and product trees as action outputs.

## Recent Changes
- Added `OrganizationGraph` component in `src/simulation/visualization.tsx` to render a force-directed graph of nodes (employees) and edges (reporting lines) based on `OrganizationalState`.
- Created and passed a test in `src/simulation/visualization.test.tsx` to verify rendering of nodes and edges.
- Resolved multiple configuration issues with Jest and TypeScript to support D3.js ESM syntax, including installing `@swc/jest` and updating `jest.config.cjs`.

## Next Steps
- Integrate the `OrganizationGraph` component into the main `App.tsx` or relevant UI sections to display the organizational structure dynamically.
- Consider additional visualization features such as node labeling, interactive zooming, or color-coding based on capabilities.
- Write tests for user interactions with the visualization if applicable.
- Begin implementing agent behavior logic with TDD, starting with the concept of agents submitting a product graph (a shallow subset of their supply tree and a subset of their demand model) to be checked against the demand graph, with rewards based on matching the real (secret) demand model.
- Document and refine the three agent actions: requesting context, sharing context, and acting.

## Active Decisions and Considerations
- Using D3.js for visualization due to its powerful force-directed layout capabilities, suitable for hierarchical data.
- Decision to manually tick the simulation in tests to avoid asynchronous rendering issues; may revisit for real-time updates in the application.
- Modeling agent capabilities as supply trees, their understanding of tasks as a demand model tree, and actions as submitting a product tree, with rewards calculated based on alignment with the real (secret) demand model.

## Important Patterns and Preferences
- Continue following TDD principles by writing tests for new visualization features and agent behavior logic before implementation.
- Maintain separation of structural and behavioral changes in commits, ensuring tests pass before and after structural refactoring.

## Learnings and Project Insights
- Configuring Jest to handle ESM modules from `node_modules` (like D3.js) requires specific transformer settings; `@swc/jest` was effective for this project.
- TypeScript configuration challenges with `esModuleInterop` highlighted the importance of consistent import styles across the codebase.
