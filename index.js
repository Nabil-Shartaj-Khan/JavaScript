// console.log("This is the beginning")
// window.alert("Are you ready?")

// //variable
// let my_name="Nabil";
// console.log(my_name);

// document.getElementById("test").innerHTML="Test is overrode by "+ my_name;

//
let username;
document.getElementById("newButton").onclick=function(){
    username=document.getElementById("newText").value;
    console.log(username);
    document.getElementById("newlabel").innerHTML="Hello " + username
    
}
