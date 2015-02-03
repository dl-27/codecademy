var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choise1, choise2){
    if (choise1 === choise2)
    {return "The result is a tie!";} 
    else if (choise1 === "rock"){
        if (choise2 === "scissors") {
            return ("rock wins");} 
            else {return "paper wins"}
    } else if (choise1 === "paper"){
        if (choise2 === "rock"){
            return ("paper wins")}
            else {return "scissors wins";}
}}
compare (userChoise, computerChoise);