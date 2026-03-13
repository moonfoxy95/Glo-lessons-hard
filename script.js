let num = 266219;

let res = 1;
for (let i = 0; i < num.toString().length; i += 1) {
  res = num.toString()[i] * res;
}

console.log(res);
let cubeRes = res ** 3;
console.log(cubeRes);
console.log(cubeRes.toString().substring(0, 2));