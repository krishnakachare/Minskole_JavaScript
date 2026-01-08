//  6. Bigint

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// console.log(999999999999999);
// // 999999999999999

// console.log(9999999999999999);
// // 10000000000000000

// literal:
let bigNum = 10n
console.log(bigNum, typeof bigNum); // 10n bigint

// class
bigNum = BigInt(100)
console.log(bigNum, typeof bigNum); // 100n bigint

// console.log(40 + 10n); // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(40n + 10n); // 50n
// 10mm + 10m

