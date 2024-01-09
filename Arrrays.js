//  Arrays in js

let heros = ["IronMan", "Hulk", "BatMan", "Thor", "WonderWomen"];

// mow printing the array by using for loop

for (let index = 0; index < heros.length; index++) {
  console.log(heros[index]);
}

// now by using for of loop

for (const iterator of heros) {
  console.log(iterator);
}

for (const iterator of heros) {
  let print = iterator.toUpperCase();
  console.log(print);
}

// Pratice question

let Array = [89, 54, 67, 98, 68, 98];
// as per question we have to calculate avergae of marks so we required sum of all and divied it by number of marks

let sum = 0;
let number = 0;
for (let i = 0; i < Array.length; i++) {
  sum = Array[i] + sum;
  number++;
}
console.log(sum);
console.log(number);

let Avg = sum / number;
console.log(Avg);
