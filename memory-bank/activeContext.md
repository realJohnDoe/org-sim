# Active Context for Organizational Simulation

## Current Focus
- Integrated a slider in `App.tsx` for adjusting the number of direct reports per manager, allowing dynamic control over hierarchy depth.
- Enhanced the visualization in `src/simulation/visualization.tsx` to ensure edges are correctly rendered in dark grey with increased stroke width.
- Implemented dynamic zoom level in the visualization to ensure all nodes are visible within the viewable area.
- Updating Memory Bank documentation to reflect the current state and plan next steps for agent behavior implementation.

## Recent Changes
- Added a GitHub Actions workflow for automated deployment to GitHub Pages, configured in `.github/workflows/deploy.yml`. Updated `vite.config.ts` to set the base path for GitHub Pages as '/org-sim/'.
- Added a slider UI element in `App.tsx` for setting the number of direct reports per manager (range 2 to 5), updating the organizational state initialization to use this dynamic value.
- Updated `src/simulation/visualization.tsx` to change edge color to dark grey ("#333") and increased stroke width to 2.5 for better visibility.
- Corrected edge rendering logic in `src/simulation/visualization.tsx` to use direct references from D3's simulation data for accurate positioning.
- Implemented dynamic zoom and translation in `src/simulation/visualization.tsx` by calculating the bounding box of nodes and applying a scale and translation to fit the graph within the SVG viewport with padding.
- Previously integrated `OrganizationGraph` component into `App.tsx`, initializing organizational state with adjustable size (5 to 50 nodes), 2 dimensions, and 3 hierarchy levels.
- Simplified the edge generation logic in `src/simulation/state.ts` to use a sequential assignment of managers, ensuring a balanced hierarchy structure with a limit on direct reports per manager.
- Updated the test `should create third hierarchy level for size 7 and 2 direct reports` in `src/simulation/state.test.ts` to check for nodes not directly reporting to the root manager as an indication of deeper hierarchy levels, resolving the failing test.
- Created a summary of learning logs for July 1 and 2, 2025, in `memory-bank/learning-log/2025-07-summary-1.md`, consolidating key learnings by topic for project documentation.

## Next Steps
- Begin implementing agent behavior logic with TDD, starting with the concept of agents submitting a product graph (a shallow subset of their supply tree and a subset of their demand model) to be checked against the demand graph, with rewards based on matching the real (secret) demand model.
- Enhance visualization with additional features such as node labeling, interactive zooming, or color-coding based on capabilities.
- Write tests for user interactions with the visualization if additional interactive features are added.
- Document and refine the three agent actions: requesting context, sharing context, and acting.

## Active Decisions and Considerations
- Using D3.js for visualization due to its powerful force-directed layout capabilities, suitable for hierarchical data.
- Decision to manually tick the simulation in tests to avoid asynchronous rendering issues; may revisit for real-time updates in the application.
- Modeling agent capabilities as supply trees, their understanding of tasks as a demand model tree, and actions as submitting a product tree, with rewards calculated based on alignment with the real (secret) demand model.
- Slider for organizational size set between 5 and 50 to balance visualization clarity and performance.
- Slider for direct reports per manager set between 2 and 5 to provide meaningful variation in hierarchy depth.

## Important Patterns and Preferences
- Continue following TDD principles by writing tests for new visualization features and agent behavior logic before implementation.
- Maintain separation of structural and behavioral changes in commits, ensuring tests pass before and after structural refactoring.

## Learnings and Project Insights
- Configuring Jest to handle ESM modules from `node_modules` (like D3.js) requires specific transformer settings; `@swc/jest` was effective for this project.
- TypeScript configuration challenges with `esModuleInterop` highlighted the importance of consistent import styles across the codebase.
- Simple UI interactions like sliders can effectively control simulation parameters, enhancing user engagement with the visualization.
- Correctly defining hierarchy levels in tests is crucial for validating organizational structure logic; user feedback helped align the test with the intended definition.
- D3.js edge rendering requires using direct simulation references (`d.source.x`, `d.target.x`) rather than manual lookups to ensure correct positioning.
- Dynamic zoom calculation based on node bounding box is essential for ensuring all elements are visible in graph visualizations, requiring careful scaling and translation adjustments.
