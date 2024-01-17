let car = {
  name: "Maroti",
  model: 400,
  color: "white",
};

console.log(car);

const Akash = {
  full_name: "Akash Radhakishan Holambe",
  age: 23,
  address: "Pune keshav Nagar",
  company: "Mphasis",
};
console.log(Akash);

console.log("car.model:", car.model);
console.log(Akash["full_name"]); // This is how you can print property of object.
let currentDate = new Date();
console.log(currentDate);

let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // 0-indexed (0 for January, 11 for December)
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);

let Sagar = "Learning Bsc math at wadia college";
console.log(Sagar[0]);

for (let i = 0; i < Sagar.length; i++) {
  console.log(Sagar[i]);
}
