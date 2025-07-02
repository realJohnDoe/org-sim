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
    const availableManagers = [0]; // Start with the root manager (id 0)
    console.log('Starting edge generation for size', size, 'with directReportsPerManager', directReportsPerManager);
    console.log('Initial available managers:', availableManagers);
    for (let i = 1; i < size; i++) {
      // Find the first manager who hasn't reached the max direct reports
      let selectedManager = -1;
      // Prioritize the earliest managers to create a broader, balanced hierarchy
      for (let j = 0; j < availableManagers.length; j++) {
        const manager = availableManagers[j];
        const reportsCount = edges.filter(edge => edge.source === manager).length;
        if (reportsCount < directReportsPerManager) {
          selectedManager = manager;
          break;
        }
      }
      if (selectedManager === -1) {
        // If no manager is available, use the first manager (shouldn't happen if logic is correct)
        selectedManager = availableManagers[0];
        console.log('No available manager found for node', i, ', using first manager:', selectedManager);
      }
      edges.push({ source: selectedManager, target: i });
      console.log('Added edge:', { source: selectedManager, target: i });
      // Only add the new node as a manager if it will help create deeper levels
      if (edges.filter(edge => edge.source === selectedManager).length < directReportsPerManager) {
        availableManagers.push(i); // Add the new node as a potential future manager
      }
      console.log('Updated available managers:', availableManagers);
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
