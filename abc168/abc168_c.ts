import * as fs from 'fs';

const readString = (() => {
  const input = fs.readFileSync(0).toString();
  const words = input.split(/[ \n]/);
  let i = 0;
  return () => words[i++] || '';
})();
const readInt = () => parseInt(readString(), 10);

(function main() {
  const A = readInt();
  const B = readInt();
  const H = readInt();
  const M = readInt();

  const hx = A * Math.sin((H + M/60) / 12 * Math.PI * 2);
  const hy = A * Math.cos((H + M/60) / 12 * Math.PI * 2);

  const mx = B * Math.sin(M / 60 * Math.PI * 2);
  const my = B * Math.cos(M / 60 * Math.PI * 2);

  console.log(Math.sqrt((hx - mx) ** 2 + (hy - my) ** 2));
})();
