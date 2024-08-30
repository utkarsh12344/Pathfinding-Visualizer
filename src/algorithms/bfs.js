
import { getNeighbors } from './utils';
export const bfs = (grid, startNode, finishNode) => {
    const visitedNodesInOrder = [];
    const queue = [];
    queue.push(startNode);
    startNode.isVisited = true;
  
    while (queue.length) {
      const node = queue.shift();
      visitedNodesInOrder.push(node);
  
      if (node === finishNode) return visitedNodesInOrder;
  
      const neighbors = getNeighbors(node, grid);
      for (const neighbor of neighbors) {
        if (!neighbor.isVisited && !neighbor.isWall) {
          neighbor.isVisited = true;
          neighbor.previousNode = node;
          queue.push(neighbor);
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
  
  