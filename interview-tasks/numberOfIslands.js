// 200. Number of Islands
// Medium

/* 
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent 
lands horizontally or vertically. You may assume all four edges of the grid are 
all surrounded by water.

 

Example 1:

Input: 
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

const grid3 = [['1', '1', '0', '1', '0']];
const numIsIslands = (grid) => {
  let counter = 0;
  let rowLength = grid.length; //4
  let columnLength = grid[0].length; //5

  if (rowLength === 0) return 0;

  function markNeighbour(grid, row, column) {
    grid[row][column] = '6';
    if (grid[row][column - 1] === '1') {
      markNeighbour(grid, row, column - 1);
    }
    if (grid[row][column + 1] === '1') {
      markNeighbour(grid, row, column + 1);
    }
    if (grid?.[row - 1]?.[column] === '1') {
      markNeighbour(grid, row - 1, column);
    }
    if (grid?.[row + 1]?.[column] === '1') {
      markNeighbour(grid, row + 1, column);
    }
  }
  for (let r = 0; r < rowLength; r++) {
    for (let c = 0; c < columnLength; c++) {
      if (grid[r][c] === '1') {
        counter++;
        markNeighbour(grid, r, c);
      }
    }
  }
  return counter;
};

console.log(numIsIslands(grid));
console.log(numIsIslands(grid2));
console.log(numIsIslands(grid3));
