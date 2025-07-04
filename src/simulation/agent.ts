import type { Node } from './supplyDemandProductTypes';

export function submitProductGraph(productGraph: Node[], realDemand: Node[]): number {
  // Calculate sum of values from real demand nodes that match product graph nodes by id and structure
  let totalValue = 0;
  const productNodeIds = new Set(productGraph.map(node => node.id));
  const productNodesById = new Map(productGraph.map(node => [node.id, node]));
  
  for (const demandNode of realDemand) {
    if (productNodeIds.has(demandNode.id)) {
      const productNode = productNodesById.get(demandNode.id);
      // Check if children match
      if (productNode && JSON.stringify(productNode.children.sort()) === JSON.stringify(demandNode.children.sort())) {
        console.log(`Matching demand node found with matching structure: ${demandNode.label} with value ${demandNode.value}`);
        totalValue += demandNode.value;
      } else {
        console.log(`Matching demand node found but structure mismatch: ${demandNode.label}`);
        return 0; // Return 0 if structure does not match for any node
      }
    }
  }
  
  return totalValue;
}
