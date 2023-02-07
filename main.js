// class //
class Car {
  constructor(model, make, year, min, max) {
    (this.model = model),
      (this.make = make),
      (this.year = this.carAge(year)),
      (this.price = this.costCar(min, max));
  }
  //method// backtek -> called tamplet litarels
  getCarInfo() {
    return `A ${this.model} made by ${this.make} at ${this.year}`;
  }
  carAge(year) {
    return 2023 - year;
  }
  //هسا هون بنعمل ميثود وبنعطي math.floorهون
  costCar(min, max) {
    // let random = Math.floor((Math.random() * (max-min))+min );
    let random = Math.floor(Math.random() * max);
    if (random < min) {
      return min;
    }
    return random;
  }
}
//بدي اعرف object جديد//
const car1 = new Car("Camry", "Toyota", 2010, 10000, 40000);
console.log(car1.getCarInfo());
console.log(car1.price);

///////////////////////////////////////////////

class Person {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }
  //method// backtek -> called tamplet litarels
  getGreeting() {
    return `Hi Im ${this.firstName}  ${this.lastName} and I'm  ${this.age} years old `;
  }

}
//بدي اعرف object جديد//
const Person1 = new Person("mohammad", "mahmoud", 29);
console.log(Person1.getGreeting());
/////////////////////////////////////////////////

//Arow function///
const counterFun = (counter) => (counter > 100 ? 0 : counter++);
const nameAge = (Name, age) => {
  console.log(`Hello ${Name}`);
  console.log(`You are ${age} years old`);
};

// const createFullName = (firstName, lastName) => firstName + " " + lastName;

const doubleNumber = (number) => number * 2;

const getEvenNumbers = (array) => {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
};

const getHi = () => {
  if (1 < 2) {
    for (let index = 0; index < 5; index++) {
      console.log("hi");
    }
  } else {
    console.log("bye");
  }
};
getHi();

////////////////////////////////////////
const numbers = [2, 4, 5];
let sum =
  numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue ** 2,
    0
  ) / numbers.length;
console.log(sum); // 21
/////////////////////////////////////////////
let list = [1, 2, 3, 4, 5, 6, 7, 8];
let multiblyBy10 = list.map((e) => e * 10);
console.log(multiblyBy10);

///////////////////////////////////////////////
function makeStrings(array) {
  return array.map((person) => {
    if (person.age >= 18) {
      return `${person.name} can go to The Matrix`;
    } else {
      return `${person.name} is under age!!`;
    }
  });
}

console.log(
  makeStrings([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);
//////////////////////////////////////
var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];

function avgAge(persons) {
  return persons.reduce((sum, person) => sum + person.age , 0) / persons.length;
}

function xx(persons) {
  persons.reduce((filtered, person) => {
      if (person.age % 2 == 0) {
        console.log(person);
        filtered.push(person.age);
        console.log(filtered);
    }
    // console.log(filtered);
    return filtered;
  }, []);
}

console.log(avgAge(persons));
// console.log(xx(persons));
////////////////////////////////////
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenOnly(array) {
  return array.filter((num) => num % 2 === 0);
}
function multiFour(array) {
  return array.filter((num) => num % 4 === 0);
}
console.log(evenOnly(array));


