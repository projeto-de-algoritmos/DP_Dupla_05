export default function find_best_cost(cost) {
  const lines = cost.length;
  const columns = cost[0].length;

  const three = cost.map((line) => line.map(() => []));

  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
      three[i][j] = cost[i][j];

      if (i === 0 && j > 0) {
        three[0][j] += three[0][j - 1];
      } else if (i > 0 && j === 0) {
        three[i][0] += three[i - 1][0];
      } else if (i > 0 && j > 0) {
        three[i][j] += Math.min(three[i - 1][j], three[i][j - 1]);
      }
    }
  }
  return [three[lines - 1][columns - 1], three];
}