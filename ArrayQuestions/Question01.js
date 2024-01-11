let array = ["Mphasis", "TCS", "Deloitte", "Barclas", "Atos", "Facebook"];

let newarr = array.shift(1);
console.log(newarr);
console.log(array);
array.splice(1, 2, "Deloitte", "OLA");
console.log(array);
