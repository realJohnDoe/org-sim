# Active Context: Organizational Simulation

## Current Work Focus
The project has completed the initial setup phase. The TypeScript project using Vite for React is initialized at the repository root, with dependencies for visualization (D3.js) and testing (Jest, @testing-library/react) installed. The focus is now on beginning Test-Driven Development (TDD) cycles for core models, starting with the organizational state initialization.

## Recent Changes
- Created `projectbrief.md` to outline the project's core requirements, goals, and development approach.
- Created `productContext.md` to define the purpose, problems addressed, intended functionality, user experience goals, and target audience.
- Initialized Vite project with React and TypeScript at the repository root.
- Installed necessary dependencies including D3.js for visualization and Jest for testing.
- Configured Jest for TypeScript, resolving issues with ES module scope by renaming configuration files to use '.cjs' extension.
- Confirmed that 'jest-environment-jsdom' is installed for proper test environment setup.

## Next Steps
1. Write the first failing test for organizational state initialization, focusing on immutable data structures for n-dimensional vectors and graph structures (behavioral change).
2. Implement minimal logic to pass the test, ensuring adherence to functional programming principles (behavioral change).
3. Refactor if necessary, separating structural changes from behavioral ones in commits.
4. Update `progress.md` and `activeContext.md` with each increment to reflect new functionality and next tasks.

## Active Decisions and Considerations
- **Technology Stack**: Using TypeScript with React for the frontend, D3.js for visualization, and Vite for build and deployment processes.
- **Simulation Parameters**: Organizational size between 5 and 100 agents; goal, idea, and capability dimensions between 2 and 10.
- **Agent Behaviors**: Include options for agents to act, delegate, break down, or reject ideas/tasks, ensuring realistic dynamics.
- **Goal Dynamics**: Implement mechanisms for goals to change during simulation runs based on configurable frequencies to test adaptability.

## Important Patterns and Preferences
- Adherence to TDD cycle (Red → Green → Refactor) for all development increments.
- Separation of structural, behavioral, and meta changes in commits as per Tidy First principles.
- High priority on documentation to maintain project continuity across memory resets, updating Memory Bank files with each significant change or user request.

## Learnings and Project Insights
- Early planning has highlighted the importance of a robust visualization layer to make simulation results accessible and insightful to users.
- The inclusion of goal change triggers and agent rejection options adds depth to the simulation, potentially revealing nuanced differences between organizational types.
- Ensuring compatibility with ES modules required adjustments to Jest configuration files, emphasizing the need for attention to module system details in modern JavaScript projects.
