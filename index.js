const vehicles = [
  { company: "Honda", type: "NO1" },
  { company: "Suzuki", type: "NO2" },
];

let stringOfVehicle = JSON.stringify(vehicles);

localStorage.setItem("vehicle", stringOfVehicle);
console.log(localStorage);

let storedData = localStorage.getItem("vehicles");
let getData = JSON.parse(storedData);
console.log(getData);
