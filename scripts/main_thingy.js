console.log("task 1");
for (let i = 0; i < 10; i += 1) {
    console.log((i + 1)*(i + 1));
}
console.log("task 2");
for (let i = 5; i >= 0; i -= 1) { 
    if (i == 0) {
        console.log("BLASTOFF!!!!!");
    } else {
    console.log(i);
    }
}
console.log("task 3");
for (let i = 0; i < 50; i += 2) {
    console.log(i + 2);
}
console.log("task 4");
let num = 0;
for (let i = 0; i < 100; i += 1) {
    num = num + i;
}
console.log(num);
console.log("task 5");
num = 1;
for (let i = 1; i <= 10; i += 1) {
    num = num * i;
    console.log(num);
}
console.log("done!");
//////////////////////////////////////////////////
console.log("task 6");
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i <= arr.length; i += 1) {
    console.log(arr[i]);
}
console.log("task 7");
for (let i = 1; i <= arr.length; i += 1) {
    console.log(arr.at(-i));
}
console.log("task 8");
let deez = [];
for (let i = 1; i <= 10; i += 1) {
    deez.push(i*i*i);
}

for (let i = 0; i <= deez.length; i += 1) {
    console.log(deez[i]);
}
console.log("task 9");
let fibbisnotch = [0, 1];

for (let i = 1; i <= 10; i += 1) {
    fibbisnotch.push(fibbisnotch.at(-1) + fibbisnotch.at(-2));
}
for (let i = 0; i <= deez.length; i += 1) {
    console.log(fibbisnotch[i]);
}
console.log("task 10");
let nuts = [];
for (let i = 1; i <= arr.length; i += 1) {
    nuts.push(arr.at(-i))
}
for (let i = 0; i <= nuts.length; i += 1) {
    console.log(nuts[i]);
}