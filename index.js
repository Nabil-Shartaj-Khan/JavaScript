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

calculating circle hypotenuse
document.getElementById("cibutton").onclick = function () {
    value_a = Number(document.getElementById("avalue").value);
    value_b = Number(document.getElementById("bvalue").value);

    value_c = Math.sqrt(Math.pow(value_a, 2) + Math.pow(value_b, 2));

    document.getElementById("result").innerHTML = "Side C is" + value_c;
}

