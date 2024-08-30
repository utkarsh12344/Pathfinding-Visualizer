// utils.js
export const getNeighbors = (node, grid) => {
    const neighbors = [];
    const { row, col } = node;
  
    // Directions: up, down, left, right
    const directions = [
      [0, 1],   // right
      [0, -1],  // left
      [1, 0],   // down
      [-1, 0]   // up
    ];
  
    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;
  
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length
      ) {
        neighbors.push(grid[newRow][newCol]);
      }
    }
  
    return neighbors;
  };
  