//Start with a function to get the computer choice 
//function declaration 
function getComputerChoice(){
    //randomly returns rock paper or scissors and stores it in a variable 
//create  an array  that stores the computers random selection 
var options = ['rock','paper', 'scissors']
//get the random selection then assign it to a variable
let get_Choice = Math.floor(Math.random()*options.length);
let result = options[get_Choice];
return(result);
     
 

}
const computer_selection = getComputerChoice()
//function that asks the player for their choice and then stores it in a variable
function get_player_choice(){
    let choice = prompt("Rock, Paper , Scissors  ?").toLowerCase
    return choice

}

//Function that plays a round of the actual game
//Takes player selection and computer selection as the parameters
//After choices have been entered it then compares the two choices and declares a winner 
// Boolean to compare results rocks beats scissors etc