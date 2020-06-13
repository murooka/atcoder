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

(function main() {
  const T = readString();
  let zero = 0;
  let one = 0;
  for (let i = 0, len = T.length; i < len; i++) {
    if (T[i] === '1') one++;
    else zero++;
  }

  /*
  1:1
  2:1+1
  3:1+1+2
  4:1+1+2+2
  5:1+1+2+2+3
  6:1+1+2+2+3+3
  */

  if (zero > one) {
    zero -= one;
    one *= 2;
  } else {
    one += zero;
    zero = 0;
  }
  console.error({ one, zero });

  let result = 0;
  const n = Math.ceil(one / 2);
  result += n * (n + 1);
  if (one % 2 === 1) result -= n;
  console.error({ result });

  if (zero > 0) result += n * zero;
  console.log(result);
})();
