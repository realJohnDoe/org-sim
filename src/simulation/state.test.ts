import { initializeOrganizationalState } from './state';

describe('Organizational State Initialization', () => {
  test('should initialize organizational state with vectors and graph', () => {
    const size = 5;
    const dimensions = 2;
    const hierarchyLevels = 2;

    const state = initializeOrganizationalState(size, dimensions, hierarchyLevels);

    expect(state).toBeDefined();
    expect(state.position).toHaveLength(dimensions);
    expect(state.graph).toBeDefined();
    expect(state.graph.nodes).toHaveLength(size);
    expect(state.graph.edges).toBeDefined();
  });
});
