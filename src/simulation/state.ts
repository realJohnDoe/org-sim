export interface OrganizationalState {
  graph: {
    nodes: Array<{ id: number; capabilities: number[] }>;
    edges: Array<{ source: number; target: number }>;
  };
}

export function initializeOrganizationalState(size: number, dimensions: number, directReportsPerManager: number): OrganizationalState {
  // Initialize nodes with empty capability vectors
  const nodes = Array.from({ length: size }, (_, id) => ({
    id,
    capabilities: Array(dimensions).fill(0),
  }));

  // Initialize edges based on direct reports per manager
  const edges = [];
  if (size > 1) {
    let currentManager = 0;
    let reportsCount = 0;
    for (let i = 1; i < size; i++) {
      if (reportsCount >= directReportsPerManager) {
        currentManager++;
        reportsCount = 0;
      }
      edges.push({ source: currentManager, target: i });
      reportsCount++;
    }
    console.log('Final edges:', edges);
  }

  return {
    graph: {
      nodes,
      edges,
    },
  };
}
