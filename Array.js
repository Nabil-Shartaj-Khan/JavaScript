let names = [
  "Nabil",
  "Shartaj",
  "Khan",
  "Lionel",
  "Messi",
  "Zlatan",
  "Ibrahimovic",
];

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
