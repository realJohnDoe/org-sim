# System Patterns: Organizational Simulation

## System Architecture
The organizational simulation is designed as a modular, web-based application using TypeScript, emphasizing a functional and declarative approach to architecture. The system is structured around pure functions and immutable data to ensure predictability and ease of testing. The architecture is divided into the following conceptual areas:

- **Data Structures**: 
  - Organizational state represented as immutable data structures, including an n-dimensional vector for position and a graph (as nested immutable objects) for structure (deep hierarchy for traditional, flatter for agile).
  - Agent capabilities defined as supply trees, representing their capabilities as immutable hierarchical structures.
  - Agent demand models represented as trees, capturing their understanding of tasks or goals in the world as mutable data that can be updated when getting new context from their peers.
  - Agent actions modeled as submitting product trees, which are shallow subsets of their supply trees and subsets of their demand models, with rewards calculated based on alignment with the real (secret) demand model.
  - Goals modeled as immutable target vectors in n-dimensional space with associated change frequency parameters.
  - Ideas represented as proposed movement vectors, immutable until transformed by agent decisions.
- **Simulation Logic**: 
  - Composed of pure functions that transform state based on agent decisions, goal updates, and time steps, producing new state without side effects.
  - Agent behavior includes three primary actions: requesting context, sharing context, and acting (submitting a product graph to be checked against the demand graph).
  - Performance metrics calculated declaratively from state history (e.g., time to reach goal, efficiency).
- **Visualization Layer**: 
  - Built with React for declarative UI rendering and D3.js for data-driven visualizations of organizational graphs and movement projections (n-dimensional to 2D/3D).
  - User inputs declaratively update simulation parameters, triggering state transformations.
- **Testing Framework**: 
  - Utilizes Jest for unit and integration tests, focusing on pure function outputs given specific input states to validate simulation behavior.

## Key Technical Decisions
- **TypeScript**: Chosen for type safety and maintainability, supporting functional programming with strong typing for immutable data.
- **React with Vite**: Selected for declarative UI updates and fast development cycles, targeting deployment on GitHub Pages for accessibility.
- **D3.js**: Used for declarative data visualization, binding simulation state directly to visual elements for organizational graphs and vector projections.
- **Immutable Data**: Leverages libraries like Immer or custom immutable patterns to ensure state is never mutated directly, enhancing predictability.
- **Functional State Management**: State transitions handled by pure functions, avoiding traditional object-oriented encapsulation in favor of compositional logic.
- **Simulation Loop**: Implemented as a recursive or iterative fold over time steps, where each step declaratively computes a new state from the previous one based on agent decisions and goal conditions.

## Design Patterns in Use
- **Immutable State**: All data structures are immutable, with transformations creating new copies rather than modifying in place, aligning with functional programming principles.
- **Higher-Order Functions**: Simulation logic uses functions that accept other functions as parameters to handle varied agent behaviors (request context, share context, act) in a declarative manner.
- **Declarative Data Flow**: State updates and visualizations are expressed as transformations and mappings from input data to output states or DOM elements, avoiding imperative control flows.
- **Composition over Inheritance**: Behaviors and logic are composed from small, reusable functions rather than relying on class hierarchies or object-oriented patterns.

## Component Relationships
- The organizational state is a central immutable data structure, transformed by pure functions in the simulation logic to reflect agent decisions and goal updates.
- Agent decision-making is modeled as a set of pure functions that take current state (organization, agents, ideas, goals) and return a new state based on rules for requesting context, sharing context, and acting (submitting product trees for evaluation against demand models).
- The simulation engine operates as a pipeline of state transformations, folding over time steps to produce a sequence of states, each derived declaratively from the last.
- The visualization layer binds to the current state declaratively, using React's component model and D3.js's data joins to render graphs and metrics without manual DOM manipulation.
- User interactions update configuration parameters, which are fed into the simulation's state transformation pipeline to influence future states.

## Critical Implementation Paths
- **Initialization**: Declaratively define initial state by composing functions to generate organizational graphs (traditional/agile), agent capability vectors as supply trees, demand model trees, and initial goals as immutable data structures.
- **Simulation Step**: Each step is a pure function transforming the current state into a new state by mapping over agents for decisions (request context, share context, act), updating positions based on actions, checking goal conditions, and applying changes if triggered, all without side effects.
- **Visualization Update**: Declaratively map current state to visual representations after each step or on user input, ensuring UI reflects data directly through React and D3.js bindings.
- **Performance Metrics**: Compute metrics as pure reductions over state history, extracting data like time to goal, action counts (including context requests, shares, and product submissions), delegation frequency, and rejection rates for comparing traditional vs. agile setups under varied conditions.
