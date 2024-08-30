
import { getNeighbors } from './utils';
export const dfs = (grid, startNode, finishNode) => {
    const visitedNodesInOrder = [];
    const stack = [];
    stack.push(startNode);
    startNode.isVisited = true;
  
    while (stack.length) {
      const node = stack.pop();
      visitedNodesInOrder.push(node);
  
      if (node === finishNode) return visitedNodesInOrder;
  
      const neighbors = getNeighbors(node, grid);
      for (const neighbor of neighbors) {
        if (!neighbor.isVisited && !neighbor.isWall) {
          neighbor.isVisited = true;
          neighbor.previousNode = node;
          stack.push(neighbor);
        }
      }
    }
  };
  
  export const getNodesInShortestPathOrder = (finishNode) => {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  };
  
  