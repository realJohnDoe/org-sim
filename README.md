# Organizational Simulation 📋

Welcome to the Organizational Simulation project! This web-based tool simulates organizational dynamics to compare the performance of traditional hierarchical organizations versus agile organizations with cross-functional teams under varying goal conditions. Built with TypeScript, React, and D3.js, it visualizes structures as tree representations, deployed on GitHub Pages for easy access.

## Project Overview 🌐

This project aims to model organizations as tree-shaped graphs for hierarchy. Agents within the organization are defined by capability trees and interact with goals through actions like generating ideas, acting, delegating, breaking down tasks, or rejecting them. Performance is evaluated based on tree matching against a demand model, with the primary objective to validate the hypothesis that agile organizations perform better with frequent goal changes and complex objectives.

## Current Status 🚀

The project has made significant progress with the following implementations:
- **UI Controls**: Dynamic sliders in the app allow users to adjust organizational size (5-100 nodes) and hierarchy depth (direct reports per manager, 3-20).
- **Visualization Enhancements**: The force-directed graph now renders edges in dark grey for visibility, with dynamic zoom and translation ensuring all nodes are within view.
- **Deployment**: Successfully deployed to GitHub Pages using an automated GitHub Actions workflow.

Core simulation logic and agent behaviors are the next focus areas for development using Test-Driven Development (TDD) principles.

## Technologies Used 💻

- **TypeScript**: For type-safe development.
- **React**: For declarative UI rendering.
- **D3.js**: For data-driven visualizations of organizational graphs.
- **Vite**: For fast build and deployment to GitHub Pages.
- **Jest**: For unit and integration testing of simulation logic.

## Key Features ✨

- **Interactive Visualization**: 'OrganizationGraph' component renders organizational structures as force-directed graphs.
- **Dynamic Hierarchy**: Sliders adjust the number of nodes and direct reports, updating the hierarchy in real-time.
- **Edge Rendering**: Corrected edge positioning with dark grey color and increased stroke width for better visibility.
- **Zoom Functionality**: Dynamic zoom calculation ensures all nodes are visible within the SVG viewport.

## What's Next 🔜

- **Agent Behavior Logic**: Implement actions like requesting context, sharing context, and acting (submitting product graphs for evaluation) using TDD.
- **Simulation Engine**: Develop pure functions to manage time steps and state transitions.
- **Performance Metrics**: Calculate metrics like time to goal and efficiency based on tree matching for comparing traditional vs. agile setups.
- **Dependency Review**: Remove unnecessary dependencies to streamline the project.

## Key Learnings 📚

- **Project Setup**: Resolved Jest and TypeScript configuration challenges for ES module compatibility with D3.js.
- **TDD Practices**: Completed TDD cycles for state initialization and hierarchy logic, reinforcing the importance of failing tests before implementation.
- **Visualization Fixes**: Addressed issues with invisible edges and nodes outside viewable areas using D3.js simulation data and bounding box calculations.
- **UI Integration**: Simple sliders enhance user engagement by controlling simulation parameters effectively.

## Setup and Deployment 🛠️

To run the project locally:
1. Clone the repository and navigate to the project directory.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.

The application is automatically deployed to GitHub Pages via a GitHub Actions workflow on pushes to the main branch, accessible at [https://realjohndoe.github.io/org-sim](https://realjohndoe.github.io/org-sim).

---

This project follows Kent Beck's Test-Driven Development (TDD) and Tidy First principles, ensuring high code quality through small, tested increments and separated structural and behavioral changes.
