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

  test('should create single team with one manager for size 3 and 2 direct reports', () => {
    const size = 3;
    const dimensions = 2;
    const directReportsPerManager = 2;

    const state = initializeOrganizationalState(size, dimensions, directReportsPerManager);

    expect(state.graph.nodes).toHaveLength(size);
    expect(state.graph.edges).toHaveLength(size - 1); // 2 edges for 3 nodes (1 manager, 2 reports)
    expect(state.graph.edges.filter(edge => edge.source === 0)).toHaveLength(2); // Manager (id 0) has 2 direct reports
  });

  test('should create third hierarchy level for size 7 and 2 direct reports', () => {
    const size = 7;
    const dimensions = 2;
    const directReportsPerManager = 2;

    const state = initializeOrganizationalState(size, dimensions, directReportsPerManager);

    expect(state.graph.nodes).toHaveLength(size);
    expect(state.graph.edges).toHaveLength(size - 1); // 6 edges for 7 nodes
    // Check for third level: at least one node should have a source that is not the top manager (id 0)
    const hasThirdLevelOrBelow = state.graph.edges.some(edge => edge.source !== 0);
    expect(hasThirdLevelOrBelow).toBe(true); // There should be nodes not directly reporting to the root manager
  });
});
