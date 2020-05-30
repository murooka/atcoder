import * as fs from 'fs';

const readString = (() => {
  const input = fs.readFileSync(0).toString();
  const words = input.split(/[ \n]/);
  let i = 0;
  return () => words[i++] || '';
})();
const readInt = () => parseInt(readString(), 10);

(function main() {
  const K = readInt();
  const S = readString();
  if (S.length > K) {
    console.log(S.substring(0, K) + '...');
  } else {
    console.log(S);
  }
})();
