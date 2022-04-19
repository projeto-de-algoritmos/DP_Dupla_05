export default function generate_costs() {
  const min = 4;
  const max = 8;
  const numLines = Math.floor(Math.random() * (max - min + 1)) + min;
  const costs = [];
  for (let i = 0; i < numLines; i++) {
    const line = Array.from({ length: numLines }, () =>
      Math.floor(Math.random() * 99)
    );
    costs.push(line);
  }
  return costs;
}