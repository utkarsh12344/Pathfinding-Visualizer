export const dijkstra = (grid, startNode, finishNode) => {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    if (closestNode.isWall) continue;
    if (closestNode.distance === Infinity) return visitedNodesInOrder;

    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);

    if (closestNode === finishNode) return visitedNodesInOrder;

    updateNeighborNodes(closestNode, grid);
  }
};

const getAllNodes = (grid) => {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

const sortNodesByDistance = (unvisitedNodes) => {
  unvisitedNodes.sort((a, b) => a.distance - b.distance);
};

const updateNeighborNodes = (node, grid) => {
  const neighbors = getNeighbors(node, grid);
  for (const neighbor of neighbors) {
    if (!neighbor.isVisited) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }
};

const getNeighbors = (node, grid) => {
  const neighbors = [];
  const { row, col } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]); // Up
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]); // Down
  if (col > 0) neighbors.push(grid[row][col - 1]); // Left
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]); // Right

  return neighbors;
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
