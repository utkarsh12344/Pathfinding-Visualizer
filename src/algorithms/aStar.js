const getAllNodes = (grid) => {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  };
  
  const sortNodesByDistance = (nodes) => {
    return nodes.sort((a, b) => a.distance - b.distance);
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
  
  export const aStar = (grid, startNode, finishNode) => {
    const openSet = [startNode];
    const closedSet = [];
    startNode.distance = 0;
  
    while (openSet.length > 0) {
      let currentNode = openSet[0];
      if (currentNode === finishNode) return closedSet;
  
      for (let i = 1; i < openSet.length; i++) {
        if (openSet[i].distance < currentNode.distance) {
          currentNode = openSet[i];
        }
      }
  
      openSet.splice(openSet.indexOf(currentNode), 1);
      closedSet.push(currentNode);
  
      const neighbors = getNeighbors(currentNode, grid);
      for (const neighbor of neighbors) {
        if (closedSet.includes(neighbor) || neighbor.isWall) continue;
  
        const tentativeGScore = currentNode.distance + 1;
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        } else if (tentativeGScore >= neighbor.distance) {
          continue;
        }
  
        neighbor.distance = tentativeGScore;
        neighbor.previousNode = currentNode;
      }
    }
    return closedSet; // Return the path
  };
  
  // Function to retrieve the nodes in the shortest path order
  export const getAStarPath = (finishNode) => {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode; // Backtrack through the path
    }
    return nodesInShortestPathOrder;
  };
  