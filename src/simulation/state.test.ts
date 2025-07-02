import { initializeOrganizationalState } from './state';

describe('Organizational State Initialization', () => {
  test('should initialize organizational state with graph based on direct reports per manager', () => {
    const size = 5;
    const dimensions = 2;
    const directReportsPerManager = 2;

    const state = initializeOrganizationalState(size, dimensions, directReportsPerManager);

    expect(state).toBeDefined();
    expect(state.graph).toBeDefined();
    expect(state.graph.nodes).toHaveLength(size);
    expect(state.graph.edges).toBeDefined();
  });
});
