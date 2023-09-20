const carManufacturer = {
  name: "Honda",
  model: "Accord",
  trimLevel: "ex",
  baseFeatures: ["wheels", "engine", "seat"],
  entertainment: "crappy audio system",
};

const dealerShip = Object.create(carManufacturer);

dealerShip.equipment = "roof rack";
dealerShip.warranty = "extended";
dealerShip.branding = "license plate frame";

console.log(dealerShip);

const myCar = Object.create(dealerShip);

myCar.custom = "after market trailer hitch";
myCar.bumperSticker = "Save the Llamas!";
myCar.entertainment = "fancy audio system";

console.log(myCar);
// looping in object
// for (const key in myCar) {
//   const val = myCar[key];
//   console.log(`${key} ==> ${val}`);
// }

// looping in for variable specific with hasOwnProperty()

for (const key in myCar) {
  if (Object.hasOwnProperty.call(myCar, key)) {
    const element = myCar[key];
    console.log(element);
  }
}

for (const key in myCar) {
  if (myCar.hasOwnProperty(key)) {
    const element = myCar[key];
    console.log(key, element);
  }
}

//Constructor function expression

const Employee = function (fname, lname, job) {
  this.fname = fname;
  this.lname = lname;
  this.position = job;
  this.fullName = () => `${this.fname} ${this.lname}`;
};

const id1234 = new Employee("Bob", "Marley", "Singer");
console.log(id1234.fname);
console.log(id1234.fullName());
