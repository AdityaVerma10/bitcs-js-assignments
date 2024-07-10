// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   makeSound = function () {
//     console.log("making sound!");
//   };
// }
// class Dog extends Animal {
//   constructor(name, age) {
//     super(name, age);
//   }
//   makeSound = function () {
//     console.log("Woof!");
//   };
// }
// const dog = new Dog("mycat", 8);
// console.log(dog);

// function createCounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//     },
//     getvalue: function () {
//       return count;
//     },
//   };
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getvalue());

// class Person {
//   constructor(firstName, lastName) {
//     (this.firstName = firstName), (this.lastName = lastName);
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, grade) {
//     super(firstName, lastName);
//     this.grade = grade;
//   }
//   getDetails() {
//     return this.getFullName() + " " + this.grade;
//   }
// }

// const aditya = new Student("aditya", "verma", "A");
// console.log(aditya.getDetails());

// function outer(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// console.log(outer(4)(7));

// **** counter with Constructor Functions *** //
// function Counter() {
//   this.count = 0;

//   this.increment = function () {
//     this.count++;
//   };

//   this.getValue = function () {
//     return this.count;
//   };
// }

// const counter = new Counter();
// counter.increment();
// console.log(counter.getValue());

// *** clousers example **** //
// function createPerson(firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     getFullName: function () {
//       return this.firstName + " " + this.lastName;
//     },
//   };
// }

// *** One more Inheritance Example  *** //

// class Vehical {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   getDetails() {
//     return this.make + "  " + this.model;
//   }
// }

// class Car extends Vehical {
//   constructor(make, model, year) {
//     super(make, model);
//     this.year = year;
//   }
//   getCarDetalis() {
//     return this.getDetails() + "  " + this.year;
//   }
// }

// ** setTimeout with Callbacks and fetching user details**//
// function delay(milliseconds, callback) {
//   setTimeout(callback, milliseconds);
// }

// function delayCompleted() {
//   console.log("Delay completed...");
// }

// // delay(2000, delayCompleted);

// // function fetchUserData() {
// //   fetch("https://jsonplaceholder.typicode.com/users/1")
// //     .then((res) => res.json())
// //     .then((res) => console.log(res))
// //     .catch((error) => console.log(error));
// // }
// async function fetchUserData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   if (!res.ok) throw new Error("Error while Fetching details...");
//   const data = await res.json();
//   console.log(data);
// }
// console.log(fetchUserData());

// ***** Shopping Cart Total Amount **** //
// const cart = [
//   {
//     id: 1,
//     name: "iPhone",
//     price: 60000,
//   },
//   {
//     id: 3,
//     name: "iPad",
//     price: 50000,
//   },
//   {
//     id: 4,
//     name: "macBook",
//     price: 150000,
//   },
//   {
//     id: 7,
//     name: "apple watch",
//     price: 10000,
//   },
// ];

// function calculateTotal(cart) {
//   return cart.reduce((acc, item) => {
//     return acc + item.price;
//   }, 0);
// }
// const products = [
//   {
//     id: 1,
//     name: "iPhone",
//     price: 60000,
//   },
//   {
//     id: 2,
//     name: "Tv",
//     price: 30000,
//   },

//   {
//     id: 3,
//     name: "iPad",
//     price: 50000,
//   },
//   {
//     id: 4,
//     name: "macBook",
//     price: 150000,
//   },
//   {
//     id: 5,
//     name: "moto g85",
//     price: 20000,
//   },
//   {
//     id: 6,
//     name: "redmi 13",
//     price: 16000,
//   },
//   {
//     id: 7,
//     name: "apple watch",
//     price: 10000,
//   },
// ];
// function filterByPriceRange(products, priceRange) {
//   return products.filter((item) => item.price <= priceRange);
// }

// console.log(filterByPriceRange(products, 30000));
