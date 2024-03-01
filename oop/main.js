// * OOP Project Absensi
class Student {
  constructor(absent) {
    this.absent = absent;
  }

  address = ["Kp. Pulo Jahe", "Jakarta Timur", "Indonesia"];

  personal = {
    name: "Danang",
    class: "XII SIJA 2",
    address: {
      street: this.address[0],
      city: this.address[1],
      country: this.address[2],
    },
    personalInfo: () => {
      console.log(
        `Nama : ${this.personal.name} ${this.personal.class}  Keterangan (${this.absent})`
      );
      console.log(
        `Alamat : ${this.personal.address.street}, ${this.personal.address.city} ${this.personal.address.country}`
      );
    },
  };
}

const student = new Student("hadir");
student.personal.personalInfo();
