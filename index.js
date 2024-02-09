import { pi,getCircumference,getArea } from "./math_util";}
// console.log("This is the beginning")
// window.alert("Are you ready?")

// //variable
// let my_name="Nabil";
// console.log(my_name);

// document.getElementById("test").innerHTML="Test is overrode by "+ my_name;


// let username;
// document.getElementById("newButton").onclick=function(){
//     username=document.getElementById("newText").value;
//     console.log(username);
//     document.getElementById("newlabel").innerHTML="Hello " + username
    
// }

//calculating circle hypotenuse
// document.getElementById("cibutton").onclick = function () {
//     value_a = Number(document.getElementById("avalue").value);
//     value_b = Number(document.getElementById("bvalue").value);

//     value_c = Math.sqrt(Math.pow(value_a, 2) + Math.pow(value_b, 2));

//     document.getElementById("result").innerHTML = "Side C is " + value_c;
// }

// age calculation
// document.getElementById("submit").onclick = function () {
//     const age = Number(document.getElementById("age-input").value);
//     let message = "";

//     if (age < 18) {
//         message = `${age} ? Are you crazy? How are you even here?`;
//     } else if (age >= 18 && age <= 30) {
//         message = `${age} !!! You are a fine young person`;
//     } else {
//         message = `${age} You are a bit old for this`;
//     }

//     document.getElementById("age-show").innerHTML = message;
// }

//indexof,slice,replace,touppercase,tolowercase,split,tostring,


document.getElementById("submit-one").onclick = handleClick;

function handleClick() {
    let check_status = document.getElementById("type");
    let messageElement = document.getElementById("message");
    
    messageElement.textContent = check_status && check_status.checked ? "You checked it!" : "Check it! Its not that hard";
}

document.getElementById("parent-element").addEventListener("click", function(event) {
    if (event.target.id === "submit-one") {
        handleClick();
    }
});

document.getElementById("grade-submit").onclick =function(){
    let check_grade=document.getElementById("grade-input").value
    let gradeElement = document.getElementById("show-grade");

    switch(check_grade){
        case "A":
            gradeElement.innerHTML="Fantastic work! Job well done!"
            break;
        
        case "B":
            gradeElement.innerHTML="Nice work though!"
            break;
        
        case "C":
            gradeElement.innerHTML="Satisfactory!"
            break;
        
        case "D":
            gradeElement.innerHTML="Somehow dodged a bullet!"
            break;
        
        case "F":
            gradeElement.innerHTML="Mission failed!"
            break;

        default:
            gradeElement.innerHTML="What?!!"
        }
    }
let name="Nabil";
let age=23;
let home="Dhaka"

console.log(`Hello ${name}, I see you live in ${home} and you are ${age} years old`)

//rest function

let a=5
let b=2
let c=4
let d=7

function(sum(...numbers)){
    let sum=0;
    for(let number of numbers){
        total+=number
    }
    return number
}

const numbers = [1, 2, 3, 4, 5];
function logElement(x) {
    console.log(x);
  }
numbers.forEach(logElement);
  

let numbers=[1,2,3,4,5];
let result=numbers.map(square)

result.forEach(print)
function square(x){
    return Math.pow(x,2)
}
function print(x){
    console.log(x)

}

let ages = [18, 21, 14, 16, 78, 54, 90];

let newAges = ages.filter((x) => x < 18);
newAges.forEach((x) => console.log(x));   


const new=(name,age)=>{
    console.log(`Hello ${name}, You're ${age} years old.`)
}

new("nabil","23");



const store = new Map([
    ["Boots", 20], ["Jersey", 30], ["Shorts", 35], ["Watch", 15], ["Jeans", 30]
  ]);
  
  store.forEach((price, prod) => console.log(`${prod}-$${price}`));


  class Nabil{

    static familyMember=0 
    constructor(name,age,height){
        this.name=name;
        this.age=age
        this.height=height
        Nabil.familyMember+=1
    }
    playing(){
        console.log("Are you playing?")
    }}

  const nabil1= new Nabil("Shartaz",21,180)
  const nabil2= new Nabil("Nabil",22,182)
  const nabil3= new Nabil("Orion",23,183)

  console.log(nabil1.name)
  console.log(nabil1.age)
  console.log(nabil1.height)
  console.log(Nabil.familyMember)
  
  nabil1.playing()


class Animal {
    constructor(name,age,size){
        this.name=name
        this.age=age
        this.size=size
    }
    isAlive=true
    eat(){
        console.log(`This ${this.name} is eating now!`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping now!`)

    }
}

class Rabbit extends Animal{
    constructor(name,age,size,runspeed){
        super(name,age,size)
        this.runspeed=runspeed
    }
    run(){
        console.log(`This ${this.name} is running`)
    }
}
class Bird extends Animal{
    constructor(name,age,size,flyspeed){
        super(name,age,size)
        this.flyspeed=flyspeed
    }
    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit=new Rabbit("CutieRabbit",20,"Small","Fast");
const bird=new Bird("Tweetie",21,"Medium","Fast");

console.log(rabbit.isAlive)
console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runspeed)
console.log(bird.size)
rabbit.sleep()
rabbit.run()
bird.eat()
bird.sleep()
bird.fly()


class Car {
    constructor(power) {
        this._power = power; 
    }
    get power() {
        return this._power;
    }
}

let car = new Car(400);
console.log(car.power);


class Car{
    constructor(model,color,year){
        this.model=model;
        this.color=color;
        this.year=year;
    }    
}

class Car{
    constructor(model,color,year){
        this.model=model;
        this.color=color;
        this.year=year;
    }    
}

const car1= new Car("Lambo","Green",2021)
const car2= new Car("Mercedes","Red",2023)
const car3= new Car("Toyota","Yellow",2020)
const car4= new Car("Bugatti","Black",2018)

function displayCarInfo(x){
    console.log(`Selected car is ${x.model}. It is ${x.color} and It was made in ${x.year}`)
}
function displayCarChangeInfo(car,color){
  console.log(`You changed the color for ${car.model} to ${car.color}`)
}

displayCarChangeInfo(car4)
displayCarInfo(car2)

//set time out, set interval

const wait = (time) => new Promise((resolve) => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting"));



async function loadFile(){
    let fileLoad=false;

    if (fileLoad){
        return "File is loaded"
    }
    else{
        throw "File not loaded"
    }
}

async function startProcess(){
    try{
        let message= await loadFile();
        console.log(message)
    }

    catch(error){
        console.log(error)

        }
}
startProcess();

Element=document.body
Element.title="JavaScript Basics";


let title=document.querySelector("#headtitle");
title.style.backgroundColor="lightered"

// ...............................

class Human {
    constructor(name, age, height, gender) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.gender = gender;
    }

    displayDetails() {
        console.log(`This person's name is ${this.name}. He/she is ${this.age} years old. His/Her height is ${this.height} and gender is ${this.gender}`);
    }
}

const human1 = new Human("Nabil", "24", "180 CM", "Male");

human1.displayDetails();


// ***********************************************************************************************

class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

// **********************************************************************************************************************

//super keyword

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

rabbit.run();
fish.swim();
hawk.fly();

// ***************************************************************************************************

//getters and setters 

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }
    
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

// ***********************************************************************************
// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]]

console.log(colors);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 30,
  job: "Fry cook",
};

const person2 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 34
};

const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);

// *************************************************************************************

//JS format currency

let number = 123456.789;

number = number.toLocaleString("en-US");
number = number.toLocaleString("hi-IN");
number = number.toLocaleString("de-DE");
number = number.toLocaleString(undefined);

number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

console.log(number);

