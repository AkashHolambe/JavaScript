let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

Akash = {
  color: "Brown",
  name: "Akash holambe",
  age: 23,
  date: 18 / 12 / 1999,
};
for (const key in Akash) {
  if (Object.hasOwnProperty.call(Akash, key)) {
    const element = Akash[key];
    console.log(element);
  }
}
document.getElementById("demo").innerText = "Welcome to javascript";

let Sagar = {
  color: "brown",
  name: "Sagar Holambe",
  age: 23,
};

if (Akash == Sagar) {
  console.log("Both have same values and object are also same");
} else {
  console.log("Dont have same object charater");
}

//#Source https://bit.ly/2neWfJ2
const copy_to_Clipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
