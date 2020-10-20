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
  const X = readInt();
  const N = readInt();
  const ps = new Set(Array(N).fill(0).map(readInt));

  let ary = Array(100)
    .fill(0)
    .map((_, i) => i + 1);
  ary.sort((a, b) => Math.abs(X - a) - Math.abs(X - b) || a - b);
  ary = ary.filter((i) => !ps.has(i));
  console.log(ary[0]);
})();
