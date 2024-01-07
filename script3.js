//  Using operator in java..
// Arithmetic operator +,-,/,%.

a = 10;
b = 20;
c = a + b;
console.log(c);

d = a * b;
console.log(d);
e = a % b;
console.log(e);

// Increment and decrement these are urinary operator.

a++;
console.log(a);
a--;
console.log(a);

// comparison operator

if (a == 10) {
  console.log("a have same value as 10");
} else {
  console.log("Dont have same value");
}

// === equal to check for stricketly for values and datatypes also.
//var age = prompt("Enter age");
let age = 23;
if (age == 23) {
  console.log("age is 23");
} else "You are less than or grater than 23";

console.log("Enter a number :");
const number = prompt("Enter a number");

if (number % 5 === 0) {
  console.log(number, "The number is a multiple of 5");
} else {
  console.log(number, "The number is NOT a multiple of 5");
}

// Pratice question 2

let marks = prompt("Enter marks");
if (marks >= 90 && marks <= 100) {
  console.log(marks, "A");
} else if (marks >= 70 && marks <= 89) {
  console.log(marks, "B");
} else if (marks >= 60 && marks <= 69) {
  console.log(marks, "C");
} else if (marks >= 50 && marks <= 59) {
  console.log(marks, "D");
} else if (marks >= 0 && marks <= 49) {
  console.log(marks, "F");
}
