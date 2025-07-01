# Project Brief: Organizational Simulation

## Overview
This project aims to create a simulation of organizational dynamics using TypeScript, targeting a web-based visualization deployable on GitHub Pages. The simulation models organizations as vectors in n-dimensional space with tree-shaped graphs for hierarchy. Agents within the organization are defined by capability vectors and interact with goals (target positions) by generating ideas, acting on them, delegating, breaking them down, or rejecting them. The primary objective is to compare the performance of traditional hierarchical organizations versus agile organizations with cross-functional teams under varying goal dimensionalities (2-10) and change frequencies.

## Core Requirements
- **Organizational Model**: Represent state as an n-dimensional vector and a graph structure (tree for traditional, flatter for agile).
- **Agent Behavior**: Agents have capability vectors and can generate ideas, act, delegate, decompose, or reject ideas/tasks.
- **Goal Dynamics**: Goals are target vectors that can change during simulation based on configurable frequencies.
- **Simulation Engine**: Manage agent interactions and track organizational movement towards goals over time steps.
- **Visualization**: Use React and D3.js to render organizational structures and movement in n-dimensional space (projected to 2D/3D).
- **Comparison Metrics**: Analyze and output performance data for traditional vs. agile setups under different conditions.
- **Constraints**: Organizational size between 5 and 100 agents; goal, idea, and capability dimensions between 2 and 10.

## Goals
- Validate the hypothesis that agile organizations perform better with frequent goal changes and higher goal dimensionality.
- Provide an interactive tool to visualize and adjust simulation parameters for deeper insights.

## Scope
The project will focus on core simulation logic and visualization, ensuring accurate modeling of agent behaviors and organizational structures. Additional features like advanced analytics or extended visualization options may be considered post-initial implementation based on user feedback.

## Development Approach
Following Kent Beck's Test-Driven Development (TDD) and Tidy First principles:
- Implement functionality in small, tested increments.
- Separate structural, behavioral, and meta changes in commits.
- Maintain high code quality and documentation through the Memory Bank structure.
