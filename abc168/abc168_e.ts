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
  constructor(public v: bigint) { }

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
  }
  minus = (other: number | bigint | ModBigInt) => {
    this.v = (this.v + MOD_BIGINT - ModBigInt.toBigInt(other)) % MOD_BIGINT;
    return this;
  }
  multiply = (other: number | bigint | ModBigInt) => {
    this.v = (this.v * ModBigInt.toBigInt(other)) % MOD_BIGINT;
    return this;
  }
  pow = (other: number) => {
    let v = mod(1);
    for (let i = 0; i < other; i++) v.multiply(this.v);
    return v;
  }
}

const mod = ModBigInt.of;

const abs = (a: bigint) => a > 0n ? a : -a;

(function main() {
  const N = readInt();

  let zero: number = 0;
  const groups: { [k: string]: [number, number] } = {};
  Array.from({ length: N }, () => {
    let A = readBigInt();
    let B = readBigInt();
    if (A === 0n && B === 0n) {
      zero++;
    } else if (A === 0n) {
      groups['0:1'] = groups['0:1'] || [0, 0];
      groups['0:1'][0]++;
    } else if (B === 0n) {
      groups['0:1'] = groups['0:1'] || [0, 0];
      groups['0:1'][1]++;
    } else {
      const n = gcd(abs(A), abs(B));
      A /= n;
      B /= n;
      if (A < 0) {
        A *= -1n;
        B *= -1n;
      }

      if (B > 0) {
        const k = `${A}:${B}`;
        groups[k] = groups[k] || [0, 0];
        groups[k][0]++;
      } else {
        const k = `${-B}:${A}`;
        groups[k] = groups[k] || [0, 0];
        groups[k][1]++;
      }
    }
  });

  let result = mod(1);
  for (const k of Object.keys(groups)) {
    const [xn, yn] = groups[k];

    let tmp = mod(0);
    if (xn) {
      tmp.plus(mod(2).pow(xn).minus(1));
    }

    if (yn) {
      tmp.plus(mod(2).pow(yn).minus(1));
    }

    tmp.plus(1);

    result.multiply(tmp);
  }

  result.plus(zero).minus(1);

  console.log(result.v.toString());
})();
