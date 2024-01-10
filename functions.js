// Block of code perform specific task is called function.

function myfunction(msg) {
  console.log("We are learning functon in js");
  console.log(msg);
}
myfunction();
myfunction("I love to learn js");

function sum(x, y) {
  // x and y behave like local variable which have scope only in function.
  console.log(x + y);
}

// By using name we invoke the function then it starts to execuate.
sum(10, 20);

// Arrow function

let add = (a, b) => {
  c = a + b;
  console.log(c);
};

add(10, 24);
console.log(add);

let mul = (c, d) => {
  return c * d;
};
mul(3, 4);
console.log(mul(3, 4));

// pratice question , take string as input as return count of ovewls.

let str = prompt("Enter your Name");
let count = 0;

function countvowels() {
  for (let char of str) {
    if (
      char === "a" ||
      char === "i" ||
      char === "e" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
}
countvowels();
console.log(count);

let str2 = "Akash"; // Use quotes to define a string
let num = 0;

let countvol = (str2) => {
  for (let char of str2) {
    if (
      char === "a" ||
      char === "i" ||
      char === "e" ||
      char === "o" ||
      char === "u"
    ) {
      num++;
    }
  }
};

countvol(str); // Pass the 'str' variable to the function
console.log(num);

// forEach loop in js
let array = ["pune", "mumbai", "delhi", "surat"];
array.forEach((val) => {
  console.log(val);
});
