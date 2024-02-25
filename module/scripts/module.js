// * Module
// TODO : export function
function sayHello(name) {
  console.log(`Hai ${name}`);
}

// TODO : export variable
const personalName = "Danang";

// TODO : export class
class Personal {
  constructor(name) {
    this.name = name;
  }
  sayBye(greet) {
    console.log(`${greet} ${this.name} `);
  }
}

// TODO : Melakukan multiple export
export { sayHello, personalName, Personal };
