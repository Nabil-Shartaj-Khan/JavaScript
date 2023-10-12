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




