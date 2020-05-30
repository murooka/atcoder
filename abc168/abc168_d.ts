import * as fs from 'fs';

const readString = (() => {
  const input = fs.readFileSync(0).toString();
  const words = input.split(/[ \n]/);
  let i = 0;
  return () => words[i++] || '';
})();
const readInt = () => parseInt(readString(), 10);

(function main() {
  const N = readInt();
  const M = readInt();
  const routes: { [n: number]: number[] } = {}
  const pairs = Array.from({ length: M }, () => {
    const A = readInt();
    const B = readInt();
    routes[A] = routes[A] || [];
    routes[A].push(B);
    routes[B] = routes[B] || [];
    routes[B].push(A);
  });
  const depth: { [n: number]: number } = { 1: 1 };
  const parent: { [n: number]: number } = {};
  const paths: number[] = [1];
  while (true) {
    const n = paths.pop();
    if (n == null) break;

    const rs = routes[n];
    for (const r of rs) {
      if (depth[r] == null) {
        depth[r] = depth[n] + 1;
        parent[r] = n;
        paths.unshift(r);
      }
    }
  }

  console.log('Yes');
  for (let i = 2; i <= N; i++) {
    console.log(parent[i]);
  }
})();
