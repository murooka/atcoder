import * as fs from 'fs';

const readString = (() => {
  const input = fs.readFileSync(0).toString();
  const words = input.split(/[ \n]/);
  let i = 0;
  return () => words[i++] || '';
})();
const readInt = () => parseInt(readString(), 10);
const readBigInt = () => BigInt(readString());

const gcd = (a: bigint, b: bigint) => {
  const _gcd = (a: bigint, b: bigint): bigint => {
    const q = a % b;
    return q === 0n ? b : _gcd(b, q);
  };
  return a > b ? _gcd(a, b) : _gcd(b, a);
};

const MOD = 1000000007;
const MOD_BIGINT = BigInt(MOD);
class ModBigInt {
  constructor(public v: bigint) {}

  static of(n: number | bigint) {
    return new ModBigInt(ModBigInt.toBigInt(n));
  }

  static toBigInt(other: number | bigint | ModBigInt) {
    if (typeof other === 'bigint') return other;
    if (typeof other === 'number') return BigInt(other);
    return other.v;
  }

  clone = () => new ModBigInt(this.v);
  plus = (other: number | bigint | ModBigInt) => {
    this.v = (this.v + ModBigInt.toBigInt(other)) % MOD_BIGINT;
    return this;
  };
  minus = (other: number | bigint | ModBigInt) => {
    this.v = (this.v + MOD_BIGINT - ModBigInt.toBigInt(other)) % MOD_BIGINT;
    return this;
  };
  multiply = (other: number | bigint | ModBigInt) => {
    this.v = (this.v * ModBigInt.toBigInt(other)) % MOD_BIGINT;
    return this;
  };
  pow = (other: number) => {
    const v = mod(1);
    for (let i = 0; i < other; i++) v.multiply(this.v);
    return v;
  };
}

const mod = ModBigInt.of;

const abs = (a: bigint) => (a > 0n ? a : -a);

const count = (s: number) => {
  return Math.floor(Math.sqrt(2 * s + 0.25) - 0.5);
};

(function main() {
  const N = readInt();
  const L = N % 2 === 1 ? 1 : 2;
  const AB = Array(N)
    .fill(0)
    .map(() => [readInt(), readInt()]);

  const H = (N - L) / 2;

  AB.sort((x, y) => x[1] - y[1] || x[0] - y[0]);
  console.error({ AB });
  for (let i = N - 1; i >= N - H; i--) {
    AB[i - 1][1] = Math.min(AB[i - 1][1], AB[i][1]);
    AB.pop();
  }

  AB.sort((x, y) => x[0] - y[0] || x[1] - y[1]);
  console.error({ AB });
  for (let i = N - H - 1; i >= N - H - H; i--) {
    AB[i - 1][0] = Math.max(AB[i - 1][0], AB[i][0]);
    AB.pop();
  }

  console.error({ AB });

  if (L == 1) {
    console.log(AB[0][1] - AB[0][0] + 1);
  } else {
  }
})();
