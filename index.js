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



document.getElementById("submit-one").onclick=function(){
    let check_status=document.getElementById("type")
    let messageElement = document.getElementById("message");
    
    if (check_status.checked){
        messageElement.innerHTML="You checked it!";
    }
    else{
        messageElement.innerHTML="Check it! Its not that hard";
    }
}

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





