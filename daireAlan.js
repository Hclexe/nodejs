const args = process.argv.slice(2);
const r = Number(args[0]);
const pi = Math.PI;
const alan = pi * r * r;

console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan}`);
