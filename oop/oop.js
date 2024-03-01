//* Class and Constractor Inheritance
// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello(name) {
//     console.info(`Hello ${name} my name is ${this.name} and i'm a employee`);
//   }
// }
// class Manager extends Employee {
//   constructor(name, position) {
// TODO : super function digunakan untuk memanggil parent constructor
//     super(name);
//     this.position = position;
//   }
//   sayHello(name) {
//     console.info(
//       `Hello ${name} my name is ${this.name} and i'm a ${this.position}`
//     );
//   }
// }
// TODO : With Constructor Inheritance
// const manager = new Manager("Danang", "Cloud Architect");
// manager.sayHello("Adi");
// console.info(manager);
// TODO : NO Constructor Inheritance
// const employee = new Employee("Adi");
// employee.sayHello("Danang");
// console.info(employee);

// ! ------------------------------------------------------------------

//* Super Method
// class Shape {
//   shape() {
//     console.info("Ini Shape");
//   }
// }
// class Kubus extends Shape {
//   shape() {
// TODO : Memanggil seluruh method dalam property
//     super.shape();
//     console.info("Halo");
//   }
// }
// const shape = new Kubus();
// shape.shape();
// console.info(shape);

// ! ------------------------------------------------------------------

//* Getter and Setter
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get FullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set FullName(value) {
//     const result = value.split(" ");
//     this.firstName = result[0];
//     this.lastName = result[1];
//   }
// }
// const danang = new Person("Danang", "Adi");
// console.info(danang);
// console.info(danang.FullName);
// danang.FullName = "Adi Nugroho";
// console.info(danang);

// ! ------------------------------------------------------------------

//* Public Class Field dan Constructor
//  TODO : field dapat diakses diluar class
// class Store {
//   price = 100.0;
//   quantity;
//   name;

//   constructor(quantity, name) {
//     this.quantity = quantity;
//     this.name = name;
//   }
// }
// const customer = new Store(10, "Danang");
// console.info(customer);

// ! ------------------------------------------------------------------

//* Private Class Field
// TODO : field hanya dapat diakses dari dalam class
// class Counter {
//   #counter = 0;
//   increament() {
//     this.#counter++;
//   }

//   decreament() {
//     this.#counter--;
//   }

//   get() {
//     return this.#counter;
//   }
// }
// const result = new Counter();
// result.increament();
// result.increament();
// result.increament();
// console.info(result.get());

// ! ------------------------------------------------------------------

//* Private method
// TODO : set method private yang hanya bisa digunakan di dalam class
// class Person {
//   constructor(name) {
//     if (name) {
//       this.#withSay(name);
//     } else {
//       this.#noSay();
//     }
//   }

//   #withSay(name) {
//     console.info(`Hello ${name}`);
//   }

//   #noSay() {
//     console.info("Hello");
//   }
// }
// const say = new Person("Danang");
// console.info(say);

// ! ------------------------------------------------------------------

//* Operator instanceof Inheritance
// TODO : mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan dan turunan dari class
// class Employee {}
// class Manager extends Employee {}
// const employee = new Employee();
// const manager = new Manager();
// console.info(employee instanceof Employee); //true
// console.info(employee instanceof Manager); //false
// TODO : cek class inheritance
// console.info(manager instanceof Manager); //true
// TODO : true karena Class Manager turunan dari Class Employee(paarent)
// console.info(manager instanceof Employee); //true

// ! ------------------------------------------------------------------

//* Static Class Field
// class Person {
//   static name = "Danang";
//   static age = 18;
// }
// console.info(`My Name is ${Person.name}`);

// ! ------------------------------------------------------------------

//* Static Method, Throw Error, and Manual Class Error
// class ValidationError extends Error {
//   constructor(message, field) {
//     super(message);
//     this.field = field;
//   }
// }
// class Math {
//   static sum(...numbers) {
// TODO : Pengecekan terhadap Error pada program di Class
//     if (numbers.length === 0) {
//       throw new ValidationError("Paramater harus lebih dari 0", "number");
//     }

//     let number = 0;
//     for (const result of numbers) {
//       number += result;
//     }
//     return number;
//   }
// }
// TODO : untuk memberi info error pada program
// try {
//   console.info(`Hasil dari penjumlahaan berikut adalah = ${Math.sum()}`);
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.error(
//       `Terjadi Error di field ${error.field} dengan error : ${error.message}`
//     );
//   } else {
//     console.error(`Terjadi error di ${error.message}`);
//   }
// TODO : finally jjuga dapat digunakan tanpa catch
// } finally {
//   console.info("Mau Eror atau tidak kode akan tetap berjalan");
// }

// ! ------------------------------------------------------------------

//* Iterator daan Iterable
// TODO : Iterator dan Iterable jarang digunakan
// class CounterIteratorResult {
//   constructor(value, done) {
//     this.value = value;
//     this.done = done;
//   }
// }

// class CounterIterator {
//   constructor(value, max) {
//     this.value = value;
//     this.max = max;
//   }

//   next() {
//     try {
//       if (this.value > this.max) {
//         return new CounterIteratorResult(this.value, true);
//       } else {
//         return new CounterIteratorResult(this.value, false);
//       }
//     } finally {
//       this.value++;
//     }
//   }
// }

// class Counter {
//   constructor(value, max) {
//     this.value = value;
//     this.max = max;
//   }

//   [Symbol.iterator]() {
//     return new CounterIterator(this.value, this.max);
//   }
// }

// const counter = new Counter(1, 10);
// for (const element of counter) {
//   console.info(element);
// }
