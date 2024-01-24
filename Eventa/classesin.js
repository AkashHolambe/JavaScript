// prototypes in js...
/* A javascript object is an entity having state and behaviour (properties and method)

js object have special property called prototypes
we can set prototypes using __proto__*/

// create one object of employee

const employee = {
  name: "Akash holambe",
  salary: 15000,
  caltax() {
    console.log("Tax reate is 10%");
  },
  caltax2: function () {
    console.log("2nd way to write method");
  },
};

const sagarholambe = {
  salary: 50000,
};

sagarholambe.__proto__ = employee;
