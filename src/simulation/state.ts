export interface OrganizationalState {
  position: number[];
  graph: {
    nodes: Array<{ id: number; capabilities: number[] }>;
    edges: Array<{ source: number; target: number }>;
  };
}

export function initializeOrganizationalState(size: number, dimensions: number, hierarchyLevels: number): OrganizationalState {
  // Initialize position vector with zeros for the given dimensions
  const position = Array(dimensions).fill(0);

  // Initialize nodes with empty capability vectors
  const nodes = Array.from({ length: size }, (_, id) => ({
    id,
    capabilities: Array(dimensions).fill(0),
  }));

  // Initialize edges based on hierarchy levels (simplified for now)
  const edges = [];
  if (size > 1) {
    for (let i = 1; i < size; i++) {
      const source = Math.floor(i / hierarchyLevels);
      edges.push({ source, target: i });
    }
  }

  return {
    position,
    graph: {
      nodes,
      edges,
    },
  };
}
