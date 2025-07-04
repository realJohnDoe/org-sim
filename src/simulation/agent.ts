import type { Node } from './supplyDemandProductTypes';

export function submitProductGraph(productGraph: Node[], realDemand: Node[]): number {
  // Calculate sum of values from real demand nodes that match product graph nodes by id
  let totalValue = 0;
  const productNodeIds = new Set(productGraph.map(node => node.id));
  
  for (const demandNode of realDemand) {
    if (productNodeIds.has(demandNode.id)) {
      console.log(`Matching demand node found: ${demandNode.label} with value ${demandNode.value}`);
      totalValue += demandNode.value;
    }
  }
  
  return totalValue;
}
