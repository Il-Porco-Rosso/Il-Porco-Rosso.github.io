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