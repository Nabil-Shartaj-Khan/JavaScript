//constructor and instantiate
let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};

//prototyping as calcage is needed by every instance
// Prototype method to calculate age
Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};
//first object
let nabil = new Person("Nabil", "Male", 1999);
console.log(nabil.calcAge());

//second object
let shartaz = new Person("Shartaz", "Male", 2000);
console.log(shartaz.calcAge());

console.log(nabil);
console.log(shartaz);

//javascript class

class Man {
  constructor(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

let john = new Man("John", 1995, "Male");
console.log(john);

//getter setter for objects

let Khan = {
  name: "Nabil",
  age: 24,
  salary: 12000,

  get getSalary() {
    return "Tk: " + this.salary;
  },

  set setName(val) {
    this.name = val;
  },
};

console.log(Khan.getSalary);

//getter setter for class

let User = class {
  constructor(name, pass, email) {
    this.name = name;
    this.pass = pass;
    this.email = email;
  }
  set setPass(val) {
    if (val.length < 4) {
      console.log("Password should be more than 4 characters!");
    }

    this.pass = val;
  }
};

let mark = new User("Mark", "123456", "mark@mark.com");
mark.setPass = "123456Mark";
console.log(mark);

//static method

class Footballer {
  constructor(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  }

  static greet() {
    console.log("How are you?");
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}
let Trossard = new Footballer("Leonardo", 1995, "Male");
console.log(Trossard);
Footballer.greet();

//inheritance

class Goat {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  showStatus = () => {
    console.log(`${this.name} is the GOAT!`);
  };
}

class Player extends Goat {
  constructor(name, gender, position, country, age) {
    super(name, age, position);
    this.gender = gender;
    this.country = country;
  }
  whoGoat() {
    this.showStatus();
  }
}

let messi = new Player("Messi", "Male", "Striker", "Argentina", 38);
console.log(messi);
messi.whoGoat();
