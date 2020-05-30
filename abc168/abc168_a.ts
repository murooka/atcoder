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
  let o;
  switch (N % 10) {
    case 2:
    case 4:
    case 5:
    case 7:
    case 9:
      o = 'hon';
      break;
    case 0:
    case 1:
    case 6:
    case 8:
      o = 'pon';
      break;
    case 3:
      o = 'bon';
      break;
  }
  console.log(o);
})();
