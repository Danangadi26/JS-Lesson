// * Async Method
// TODO : setInterval berfungsi memanggil berbagai method dalam waktu yang sudah di tentukan terus menerus
// setInterval(() => {
//   const time = new Date(2024, 8, 15).toString();
//   console.log(time);
// }, 1000);

// TODO : setTimeout berfungsi memanggil berbagai method sekali dalam waktu yang sudah di tentukan
// setTimeout(() => {
//   console.log(`I'm From Jakarta`);
// }, 2000);

// ! ---------------------------------------------------------------------------------------------------

// * AJAX
// TODO : object XMLHttpRequest berfungsi untuk mengirim request ke server
// const ajax = new XMLHttpRequest();
// TODO : open sebagai func untuk mengambil file JSON melalui http method
// ajax.open("GET", "api/hello.json");
// TODO : send func untuk mengirim request file JSON ke server
// ajax.send();

// ! ---------------------------------------------------------------------------------------------------

// * Callback
// TODO : Example 1
// let price = (value) => {
//   value(20000);
// };
// let equals = (value, quantity) => {
//   let result = value * quantity;
//   console.log(`Harga Apple = ${result}`);
// };
// price(sum(8));

// TODO : Example 2
// let stocks = {
//   Fruits: ["Strawberry", "Anggur", "Pisang", "Apel"],
//   liquid: ["Air", "Ice"],
//   holder: ["Cone", "Cup", "Stick"],
//   toppings: ["Chocolate", "Kacang"],
// };

// let order = (fruitName, callProduction) => {
//   setTimeout(() => {
//     console.log("Pilih Buah");
//     setTimeout(() => {
//       console.log(`Kamu telah memilih buah ${stocks.Fruits[fruitName]}`);
//       callProduction();
//     }, 1000);
//   }, 1000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log(`Order di terima, mohon tunggu`);
//     setTimeout(() => {
//       console.log("Buah telah di potong");
//       setTimeout(() => {
//         console.log(`Tambahkan ${stocks.liquid[0]} dan ${stocks.liquid[1]}`);
//         setTimeout(() => {
//           console.log("Nyalakan Mesin");
//           setTimeout(() => {
//             console.log(`Kamu memilih ${stocks.holder[1]}`);
//             setTimeout(() => {
//               console.log(`Topping yang diberikan ${stocks.toppings[0]}`);
//               setTimeout(() => {
//                 console.log("Antar Orderan dan Selamat Menikmati");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 1000);
// };
// order(1, production);

// ! ---------------------------------------------------------------------------------------------------

// * Promises
// let stocks = {
//   Fruits: ["Strawberry", "Anggur", "Pisang", "Apel"],
//   liquid: ["Air", "Ice"],
//   holder: ["Cone", "Cup", "Stick"],
//   toppings: ["Chocolate", "Kacang"],
// };

// let storeOpen = true;

// let order = (time, work) => {
// TODO : set object promise
//   return new Promise((resolve, reject) => {
//     if (storeOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Maaf toko masih tutup"));
//     }
//   });
// };

// order(2000, () => console.log(`Kamu memilih buah ${stocks.Fruits[2]}`))
//   .then(() => {
//     return order(2000, () => console.log("Buah di potong"));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`Tambahkan ${stocks.liquid[0]} dan ${stocks.liquid[1]}`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("Mesin di nyalakan"));
//   })
//   .then(() => {
//     return order(2000, () =>
//       console.log(`Es Krim menggunakan ${stocks.holder[1]}`)
//     );
//   })
//   .then(() => {
//     return order(3000, () =>
//       console.log(`Pilihan Topping ${stocks.toppings[2]}`)
//     );
//   })
//   .then(() => {
//     return order(2000, () => console.log("Es krim sudah siap disajikan"));
//   })
// TODO : catch di ekskusi ketika kondisi bernilai false
//   .catch(() => console.log("Pelanggan pergi"))
// TODO : finally di ekskusi dalam kondisi apapun baik itu true atau false
//   .finally(() => {
//     console.log("Terimakasih, Jangan lupa datang kembali");
//   });

// ! ---------------------------------------------------------------------------------------------------
