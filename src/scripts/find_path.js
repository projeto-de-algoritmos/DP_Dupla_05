export default function find_path(matrix) {
  const lines = matrix.length;
  const columns = matrix[0].length;

  let i = lines - 1;
  let j = columns - 1;

  const path = [];

  while (i + j > 0) {
    path.push([i, j]);

    if (j === 0) i--;
    else if (i === 0) j--;
    else if (matrix[i - 1][j] <= matrix[i][j - 1]) i--;
    else j--;
  }
  path.push([0, 0]);
  return path;
}