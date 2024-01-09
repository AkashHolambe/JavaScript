// // Loops in js "Loop is used to execute something repeat and reapeat"

for (let i = 1; i < 5; i++) {
  console.log("Akash Holambe", i);
}

i = 1;
do {
  console.log("Sagar Holambe", i);
  i++;
} while (i <= 10);

i = 1;
while (i <= 10) {
  console.log("Holambe", i * 2);
  i++;
}

//Q calculate sum of first five numbers; ans - 0 + 1+2+3+4 =10
let sum = 0;
console.log(typeof sum);
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

// Infinite loop  which have stoping condition always true.

let str = "Kshitij";
for (const i of str) {
  console.log("i =", i);
}

let Akash = {
  Name: "Akash Radhakishan Holambe",
  age: 24,
  Address: "KeshavNarage mundwa kharadi",
  Mobile: 9325624735,
};
for (const i in Akash) {
  console.log(i, "Value =", Akash[i]);
}
