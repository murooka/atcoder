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
  let N = readInt();
  const s: { [p: number]: number } = {};
  for (let p = 2; p <= 1000000; p++) {
    while (N % p === 0) {
      N /= p;
      s[p] = s[p] || 0;
      s[p]++;
    }
    if (N === 1) break;
  }

  let result = 0;
  for (const p of Object.keys(s) as any) {
    result += count(s[p]);
  }
  if (N > 1) result += 1;
  console.log(result);
})();
