# Active Context: Organizational Simulation

## Current Work Focus
The project is in its initial setup phase. The primary focus is on establishing the foundational documentation through the Memory Bank files and setting up the TypeScript project structure for the organizational simulation. The simulation will model traditional and agile organizational structures, agent behaviors, goal dynamics, and provide comparative performance metrics.

## Recent Changes
- Created `projectbrief.md` to outline the project's core requirements, goals, and development approach.
- Created `productContext.md` to define the purpose, problems addressed, intended functionality, user experience goals, and target audience.

## Next Steps
1. Complete the setup of remaining Memory Bank files (`activeContext.md`, `systemPatterns.md`, `techContext.md`, `progress.md`) to ensure full documentation coverage.
2. Initialize the TypeScript project using Vite, configured for React and deployment to GitHub Pages.
3. Begin Test-Driven Development (TDD) cycles for core models starting with the `Organization` class, following Kent Beck's principles of small, incremental changes with separate structural and behavioral commits.
4. Document each development step in `progress.md` to track implemented functionality and remaining tasks.

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
