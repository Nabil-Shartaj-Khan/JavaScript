let names = [
  "Nabil",
  "Shartaj",
  "Khan",
  "Lionel",
  "Messi",
  "Zlatan",
  "Ibrahimovic",
];

let years = [2000, 1999, 1997, 1975, 1986, 1993, 1987];

let position = ["Striker", "Defender", "Midfielder", "Goalkeeper"];

//array methods
let slicedNames = names.slice(1, -1); //slices and returns array elements from the given index, doesnt change original array
console.log("Sliced output-", slicedNames);

let spreadNames = [...names]; //spread operator for shallow copying
console.log(spreadNames);

//splice method mutates the original array, other than that it is same as slice

let reversedNames = names.reverse();
console.log(reversedNames); //updates original array too

let concatName = names.concat(position);
console.log(concatName); //the same thing can be obtained using spread operator

let joinedString = names.join(" is a good player. ");
console.log(joinedString);

//foreach
names.forEach((elem, index) => {
  console.log("The name is " + elem + " at index " + index);
});

let ages = years.map((age) => {
  return 2024 - age;
});

console.log(ages);
