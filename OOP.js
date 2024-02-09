//constructor and instantiate
let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;

};

//prototyping as calcage is needed by every instance
Person.prototype.calcAge={
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
