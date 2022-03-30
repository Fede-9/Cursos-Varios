const a = 1;
const b = 1;

console.log(a == b); //true

const c = '1';
const d = 1;

console.log(c == d) //true
// operador estricto
console.log(c === d) //false


const e = '6';
const f = 6;

console.log(e != f) //false
console.log(e !== f) //true


const g = 13;
const h = 15;

console.log(g > h); //false
console.log(g >= h); //false
console.log(g < h); //true
console.log(g <= h); //true


// operador and

const i = 13;
const j = 15;
const k = 22;

console.log(i > j && j > k) //false
console.log(i < j && j < k) //true


// operador or

const l = 45;
const m = 14;
const n = 10;

console.log(l > m || m < n ) //true
console.log(l < m || m < n ) //false


// operador not

const o = 45;
const p = 14;
const q = 10;

console.log(!(o > p) || p < q) //false