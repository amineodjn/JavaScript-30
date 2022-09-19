function ClickMe(){
var BirthYear= prompt("In which year were you born?")
const yearInDay = ((new Date().getFullYear())-BirthYear)*356
var h1=document.createElement("h1");
var createText=document.createTextNode("You are "+yearInDay+" days old");
h1.setAttribute("id","ageInDays");
h1.appendChild(createText);
document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){

document.getElementById("flex-box-result").remove();
}


