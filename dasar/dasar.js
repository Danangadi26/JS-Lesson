//* Array

//* Array kosong
// const animals = [];
//* Menambah value dalam array
// animals.push("Kerbau", "Gajah", "Semut");
// console.table(animals);

//* Mengubah value dalam array
// animals[0] = "Sapi";
//* Menghapus value dalam array
// delete animals[0];
// animals.push("Singa");
// console.table(animals);

// console.info(animals[2]);
// console.info(animals.length);

//! -----------------------------------------------------------------------------------------------

//* Object
// const profile = {};

//* Menambah value dalam object
// profile.name = "Danang";
// profile.alamat = "Kp. Pulo Jahe Rt.02/Rw.010";
// profile.age = 18;

//* Mengubah value
// profile.age = 19;
//* Menghapus value dalam object
// delete profile.age;

// console.table(profile);

//* Membuat properties dengan object
// const world = {
//   Asia : "Indonesia",
//   Eropa : "Inggris",
//   Austraila : "Australia",
//   Amerika : "Amerika",
//   Afrika : "Afrika"
// }

// console.table(world);
// console.info(`Salah satu negara di Asia adalah ${world.Asia}`);

//! -----------------------------------------------------------------

//* Login dengan confirm, prompt, alert, dan if statement
// const login = confirm("Apa anda ingin Login?");
// if (login) {
//   const cek = prompt("Masukan nama anda:");
//   if (cek === "danang") {
//     alert(`Selamat Datang ${cek}`);
//   } else {
//     alert("Maaf nama anda salah!!");
//   }
// } else {
//   alert("Terimakasih");
// }

//! ----------------------------------------------------------------

//* Ternary Operator
// const nilai = 70;
// const say = nilai >= 80 ? "Selamat" : "Belajar lagi";
// console.log(say);

//! ----------------------------------------------------------------

//* Nullish Coalescing Operator = Cek null dan undifined untuk mengambil nilai default
// let parameter;
// let data = parameter ? "Nilai Default";
// alert("data");

//! -----------------------------------------------------------------

//* Optional Chaining = Operator mengecek property yang bernilai null
// let nama = {};
// alert(nama?.absen?.kelas);

//! -----------------------------------------------------------------

//* For Loop and Continue
// for (let number = 1; number <= 10; number++) {
//   if (number % 2 == 0) {
//     console.log(`Bilangan Genap = ${number}`);
//   } else {
//     console.log(`Bilangan Ganjil = ${number}`);
//   }
// }

// for (let value = 1; value <= 20; value++) {
//   if (value % 2 == 0) {
//     continue;
//   }

//   console.log(`Ini adalah angka Ganjil = ${value}`);
// }

//! -----------------------------------------------------------------

//* While Loop and break
// let number = 1;
// while (true) {
//   console.log(number);
//   number++;

//   if (number >= 10) {
//     break;
//   }
// }

//! -----------------------------------------------------------------

//* For in di Object
// const person = {
//   fistName: "Danang",
//   midName: "Adi",
//   lastName: "Nugroho",
// };

// for (const name in person) {
//   console.log(`${name} : ${person[name]}`);
// }

// TODO : ${name} untuk mengakses properties in object, ${person[name]} untuk mengakses value properties.

//! -------------------------------------------------------------------

//* For Of di Array
// const fruit = [];
// fruit.push("Apple", "Mango", "Banana");

// for (const nameFruit of fruit) {
//   console.log(`Fav fruit ${nameFruit}`);
// }

//! -------------------------------------------------------------------

//* Function
// function sayHello() {
//   document.writeln("Hello");
// }
// sayHello();

//! -------------------------------------------------------------------

//* Function Parameter
// function exam(nilai1, nilai2) {
//   if (nilai1 > nilai2) {
//     document.writeln(`Nilai Danang lebih besar ${nilai1}`);
//   } else {
//     document.writeln(`Nilai Adi lebih besar ${nilai2}`);
//   }
// }
// nilai1 = prompt("Masukan Nilai Danang");
// nilai2 = prompt("Masukan Nilai Adi");
// exam(nilai1, nilai2);

//! -------------------------------------------------------------------

//* Function return value
// function say(name, say) {
//   const great = `${say} my name is ${name}`;
//   return great;
// }
// const result = say("Danang", "Hello");
// document.writeln(result);

// function contain(array, searchValue) {
//   const alert = "Program eror";
//   for (const element of array) {
//     if (element == searchValue) {
//       return element;
//     }
//   }
//   return alert;
// }
// console.table(contain([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

//! -------------------------------------------------------------------

//* Rest Argument
// function belanja(nameFruit, ...jumlahBuah) {
//   let buah = 0;
//   for (const total of jumlahBuah) {
//     buah += total;
//   }
//   document.writeln(`${nameFruit} dengan total buah ${buah}`);
// }
// belanja("apple", 2, 5, 7);

// TODO : argumen parameter di konversi menjadi array

//! -------------------------------------------------------------------

//* Spread Syntax di Rest Parameter
// function kebutuhan(name, ...jumlahBarang) {
//   let total = 0;
//   for (const barang of jumlahBarang) {
//     total += barang;
//   }
//   alert(`Nama kebutuhan ${name} dengan jumlah ${total}`);
// }
// let barang = [2, 4, 6];
// kebutuhan("Pensil", ...barang);

// TODO : Jika kita sudah mempunyai variable array maka kita bisa menggunakannya pada function

//! -------------------------------------------------------------------

//* Function di Variable and Argument
// function sayHello(name) {
//   document.writeln(`Hello ${name}`);
// }
// function giveName(callback) {
//   callback("Danang");
// }
// let say = sayHello;
// giveName(say);

// TODO : callback untuk mengembalikan nilai dari function

//! -------------------------------------------------------------------

//* Anonymous Function di Variable
// let setName = function (name) {
//   const setName = name;
//   return setName;
// };
// const viewName = setName("Danang");
// document.writeln(`Hello ${viewName}`);

//! -------------------------------------------------------------------

//* Anonymous Function di Parameter
// function setName(callback) {
//   callback("Danang");
// }
// setName(function giveName(name) {
//   document.writeln(`Hello ${name}`);
// });

//! -------------------------------------------------------------------

//* Function dalam function
// function setName() {
//   function giveName() {
//     document.writeln("Hello");
//   }

//   giveName();
// }
// setName();

//! -------------------------------------------------------------------

//* Global scope
// let counter = 0;
// function repeat() {
// TODO : Local scope function repeat
//   counter++; // TODO : We can access global scope
// }
// repeat();
// document.writeln(counter);

//! -------------------------------------------------------------------

//* Local Scope
// function sayHello() {
//   let first = "Hello";
//   return first;
// }
// document.writeln(first); // TODO : We can't access local scope
// document.writeln(sayHello()); // TODO : This program can access

//! -------------------------------------------------------------------

//* Nested Function
// function first() {
//   let name = "Danang";
//   function second() {
//     document.writeln(`Hello ${name}`);
//   }
//   second();
// }
// first();

// TODO : Child Function dapat mengakses scope di parent function

//! -------------------------------------------------------------------

//* Recursive function
// TODO : Factorial Loop
// function factorial(value) {
//   let result = 1;
//   for (let index = 1; index <= value; index++) {
//     result += index;
//   }
//   return result;
// }
// const hasil = factorial(10);
// document.writeln(hasil);

// TODO : Recursive Loop
// function factorial(value) {
//   if (value === 1) {
//     return 1;
//   } else {
//     return value * factorial(value - 1);
//   }
// }
// const hasil = factorial(10);
// document.writeln(hasil);

//! -------------------------------------------------------------------

//* Function Generator
// function* createName() {
//   yield "Danang";
//   yield "Adi";
//   yield "Nugroho";
// }
// const names = createName();
// for (const name of names) {
//   document.writeln(name);
// }

// function* buatGanjil(value) {
//   for (let index = 1; index <= value; index++) {
//     if (index % 2 === 1) {
//       yield index;
//     }
//   }
// }
// const hasil = buatGanjil(50);
// for (const value of hasil) {
//   document.writeln(value);
// }

//! -------------------------------------------------------------------

//* Arrow Function
// const setName = (setName) => {
//   let say = `Hello ${setName}`;
//   return say;
// };
// const getName = setName("Danang");
// document.writeln(getName);

//! -------------------------------------------------------------------

//* Arrow Function tanpa block
// const setName = (setName) => document.writeln(`Hello ${setName}`);
// setName("Danang");

//! -------------------------------------------------------------------

//* Arrow Function return value
// TODO : Jika menggunakan block perlu keyword return, jika tidak maka tidak perlu
// const jumlah = (number1, number2) => number1 + number2;
// const result = jumlah(10, 5);
// document.writeln(result);

// const harga = (...value) => {
//   let nilai = 0;
//   for (const thing of value) {
//     nilai += thing;
//   }
//   return nilai;
// };
// const hargaBarang = harga(100000, 50000, 10000);
// document.writeln(hargaBarang);

//! -------------------------------------------------------------------

// * Arrow Function sebagai Parameter
// function setBarang(callback) {
//   callback("Palu");
// }
// const namaBarang = setBarang((getBarang) =>
//   document.writeln(`Perlengkapan yang dibutuhkan : ${getBarang}`)
// );

//! -------------------------------------------------------------------

//* Closure
// function setAngka(value1) {
//   const name = "Danang";
//   function add(value2) {
//     document.writeln(name);
//     return value1 + value2;
//   }
//   return add;
// }
// const getAngka = setAngka(100);
// document.writeln(getAngka(50));

//! -------------------------------------------------------------------

//* Object Method
// TODO : Membuat function di Object
// const profile = {
//   name: (setName) => alert(`My Name is ${setName}`),
// };
//  TODO : Menambah Method ke Object
// profile.kelas = (setKelas) => alert(`My Class in ${setKelas}`);
// profile.name("Danang");
// profile.kelas("12 SIJA 2");

//! -------------------------------------------------------------------

//* This Keyword
// const profile = {
//   name: "Danang",
//   sayHello: function (name) {
// TODO : this = person
//     document.writeln(`Hi ${name} my Name is ${this.name}`);
//   },
// };
// profile.sayHello("Adi");

//! -------------------------------------------------------------------

//* Arrow Function di Object
// TODO : Arrow Function tidak bisa digunakan untuk mengakses arguments object, function generator, kata kunci this dan kata kunci super.
// const setProfil = {
//   setName: (name) => {
//     document.writeln(`Halo Nama saya ${name}`);
//   },
// };
// setProfil.setName("Danang");
// TODO : with this function and error
// const setProfil = {
//   setName: "Danang",
//   sayHello: (say) => {
//     document.writeln(`Hello ${say} my name is ${this.setName}`);
//   },
// };
// setProfil.sayHello("Adi");

//! -------------------------------------------------------------------

//* Getter
// TODO : Mengambil Data
// const setProfil = {
//   firstName: "Danang",
//   lastName: "Adi",
//   get detailsProfil() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//* Setter
//  TODO : Mengubah Data
//   set detailsProfil(val) {
//     const set = val.split(" ");
//     this.firstName = set[0];
//     this.lastName = set[1];
//   },
// };
// TODO : Output getter, blm di setter
// document.writeln(setProfil.detailsProfil);
// TODO : Output setelah di setter
// setProfil.detailsProfil = "Danang Adi";
// console.info(setProfil.firstName);

//! -------------------------------------------------------------------

//* Destructuring
// TODO : Mengambil value di array dan object
// TODO : Contoh di array
// const buah = ["Semangka", "Nangka", "Kelengkeng", "Melon", "Jeruk"];
// const [fruit1, fruit2, fruit3, ...fruit] = buah;
// console.log(`Buah Favorit : ${fruit1}`);
// console.log(`Buah Favorit : ${fruit}`);
// TODO : Contoh di object
// const setProfil = {
//   setName: "Danang",
//   setAge: 18,
//   setClass: "12 SIJA 2",
//   setAddress: {
//     street: "Kp.Pulo Jahe",
//     city: "Jakarta Timur",
//     province: "DKI Jakarta",
//   },
// };
// const {
//   setName,
//   setAge,
//   setClass,
//   setAddress: { street, city, province },
// } = setProfil;
// console.log(`My Name is ${setName}`);
// console.log(`My Age is ${setAge}`);
// console.log(`My class is ${setClass}`);
// console.log(`I Live in ${street} street`);
// console.log(`In ${city} city`);
// console.log(`${province}`);

//* Destructuring Function Parameter
//  TODO : Mengambil value dengan parameter dari sebuah object
// const person = {
//   firstName: "Eko",
//   middNameme: "Kurniawan",
//   lastName: "Khannedy",
// };
// const setName = (firstName, middName, lastName) => {
//   console.info(firstName);
//   console.info(middName);
//   console.info(lastName);
// };
// setName(person);

//*  Destructuring di Function Parameter (2)
// TODO : Mengambil value dari array dengan parameter function
// const sum = ([first, second]) => first + second;
// console.info(sum([10, 10]));

//* Default Value Destructuring Array
// const games = ["Valorant", "Mobile Legend"];
// const [game1, game2, game3 = "Nascar"] = games;
// console.log(game1);
// console.log(game3);

//* Default Value Destructuring Object
// const profile = {
//   firstName: "Danang",
//   lastName: "Nugroho",
// };
// const { firstName, midName = "Adi", lastName } = profile;
// console.info(midName);
// console.info(lastName);

//! -------------------------------------------------------------------

//* Strict Mode
// TODO : Membuat Eror terlihat dan mengoptimalisasi engine
// function setName() {
//   "use strict";
//   const person = {
//     firstName: "Danang",
//   };
// TODO : with statement
//   with (person) {
//     console.info(firstName);
//   }
// }
// setName();

//! -------------------------------------------------------------------

//* Debugger
// TODO : Melakukan debugging pada code
// const sum = (...numbers) => {
//   debugger;
//   let total = 0;
//   for (const number of numbers) {
//     total = number;
//   }
//   return total;
// };
// console.info(sum(1, 1, 1, 1));

//! -------------------------------------------------------------------

//* Call Method
// TODO : Memanggil key and value dari object lain
// const person = {
//   name: "Danang",
//   getName: function () {
//     console.log(`Hello My Name is ${this.name}`);
//   },
// };

// const person2 = {
//   name: "Nugroho",
// };

// person.getName.call(person2);
