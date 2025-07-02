# Active Context for Organizational Simulation

## Current Focus
- Successfully integrated the `OrganizationGraph` component into the main application (`App.tsx`) for rendering organizational structures.
- Added interactive functionality to adjust organizational size dynamically via a slider.
- Simplified the initialization algorithm for organizational hierarchy in `src/simulation/state.ts`.
- Updated test logic in `src/simulation/state.test.ts` to align with the correct definition of hierarchy levels.
- Updating Memory Bank documentation to reflect the current state and plan next steps for agent behavior implementation.

## Recent Changes
- Simplified the edge generation logic in `src/simulation/state.ts` to use a sequential assignment of managers, ensuring a balanced hierarchy structure with a limit on direct reports per manager.
- Updated the test `should create third hierarchy level for size 7 and 2 direct reports` in `src/simulation/state.test.ts` to check for nodes not directly reporting to the root manager as an indication of deeper hierarchy levels, resolving the failing test.
- Integrated `OrganizationGraph` component into `App.tsx`, initializing organizational state with adjustable size (5 to 50 nodes), 2 dimensions, and 3 hierarchy levels.
- Removed Vite and React boilerplate content from `App.tsx` to focus solely on Organizational Simulation.
- Added a slider UI element in `App.tsx` to dynamically change the organizational size, updating the visualization accordingly.
- Previously added `OrganizationGraph` component in `src/simulation/visualization.tsx` to render a force-directed graph of nodes (employees) and edges (reporting lines) based on `OrganizationalState`.
- Created and passed a test in `src/simulation/visualization.test.tsx` to verify rendering of nodes and edges.
- Resolved multiple configuration issues with Jest and TypeScript to support D3.js ESM syntax, including installing `@swc/jest` and updating `jest.config.cjs`.

## Next Steps
- Enhance visualization with additional features such as node labeling, interactive zooming, or color-coding based on capabilities.
- Write tests for user interactions with the visualization if additional interactive features are added.
- Integrate another slider for the number of direct reports per manager to allow dynamic adjustment of hierarchy depth.
- Begin implementing agent behavior logic with TDD, starting with the concept of agents submitting a product graph (a shallow subset of their supply tree and a subset of their demand model) to be checked against the demand graph, with rewards based on matching the real (secret) demand model.
- Document and refine the three agent actions: requesting context, sharing context, and acting.

## Active Decisions and Considerations
- Using D3.js for visualization due to its powerful force-directed layout capabilities, suitable for hierarchical data.
- Decision to manually tick the simulation in tests to avoid asynchronous rendering issues; may revisit for real-time updates in the application.
- Modeling agent capabilities as supply trees, their understanding of tasks as a demand model tree, and actions as submitting a product tree, with rewards calculated based on alignment with the real (secret) demand model.
- Slider for organizational size set between 5 and 50 to balance visualization clarity and performance.

## Important Patterns and Preferences
- Continue following TDD principles by writing tests for new visualization features and agent behavior logic before implementation.
- Maintain separation of structural and behavioral changes in commits, ensuring tests pass before and after structural refactoring.

## Learnings and Project Insights
- Configuring Jest to handle ESM modules from `node_modules` (like D3.js) requires specific transformer settings; `@swc/jest` was effective for this project.
- TypeScript configuration challenges with `esModuleInterop` highlighted the importance of consistent import styles across the codebase.
- Simple UI interactions like sliders can effectively control simulation parameters, enhancing user engagement with the visualization.
- Correctly defining hierarchy levels in tests is crucial for validating organizational structure logic; user feedback helped align the test with the intended definition.
