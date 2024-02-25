// TODO : Melakukan Import pada file yang sudah di combine
import * as combine from "./combine.js";

// TODO : import class
let greeting = new combine.Personal("Danang");
greeting.sayBye("Welcome");

// TODO : import function
combine.sayHello("Nugroho");

// TODO : Import variable
console.log(`Selamat siang ${combine.personalName}`);

// TODO : import all method pada file allCalc.js yang di import bersamaan
combine.calc.sum(10, 20);
combine.calc.min(50, 30);
