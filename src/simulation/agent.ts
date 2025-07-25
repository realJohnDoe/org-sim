import type { TreeNode } from './supplyDemandProductTypes';

// Helper function to build a map of nodes by ID from a tree structure
function buildNodeMap(node: TreeNode, map: Map<string, TreeNode>): void {
  map.set(node.id, node);
  node.children.forEach(child => buildNodeMap(child, map));
}

// Helper function to check if two nodes have matching structure
function hasMatchingStructure(node1: TreeNode, node2: TreeNode): boolean {
  if (node1.children.length !== node2.children.length) return false;
  for (let i = 0; i < node1.children.length; i++) {
    if (node1.children[i].id !== node2.children[i].id || !hasMatchingStructure(node1.children[i], node2.children[i])) {
      return false;
    }
  }
  return true;
}

export function submitProductGraph(productGraph: TreeNode, realDemand: TreeNode): number {
  // Calculate sum of values from real demand nodes that match product graph nodes by id and structure
  let totalValue = 0;
  
  const productNodesById = new Map<string, TreeNode>();
  const realDemandById = new Map<string, TreeNode>();
  buildNodeMap(productGraph, productNodesById);
  buildNodeMap(realDemand, realDemandById);
  
  // Check structure and values
  for (const [id, demandNode] of realDemandById) {
    if (productNodesById.has(id)) {
      const productNode = productNodesById.get(id);
      if (productNode && hasMatchingStructure(productNode, demandNode)) {
        if (productNode.value < demandNode.value) {
          return 0; // Return 0 if product node value is less than demand node value
        }
        totalValue += demandNode.value;
      } else {
        return 0; // Return 0 if structure does not match for any node
      }
    }
  }
  
  return totalValue;
}
