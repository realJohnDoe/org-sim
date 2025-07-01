import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrganizationGraph from './visualization';
import { initializeOrganizationalState } from './state';

describe('Organizational Visualization', () => {
  test('should render organizational graph with nodes and edges', () => {
    const state = initializeOrganizationalState(5, 2, 2);
    render(<OrganizationGraph state={state} />);
    
    // Check for SVG container
    const svgElement = screen.getByRole('graphics-document', { hidden: true });
    expect(svgElement).toBeInTheDocument();
    
    // Check for nodes (rendered as circles or other elements)
    const nodes = screen.getAllByRole('graphics-symbol', { hidden: true });
    expect(nodes.length).toBeGreaterThanOrEqual(state.graph.nodes.length);
    
    // Check for edges (rendered as lines or paths)
    const edges = screen.getAllByRole('graphics-object', { hidden: true });
    expect(edges.length).toBeGreaterThanOrEqual(state.graph.edges.length);
  });
});
