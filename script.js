//Start with a function to get the computer choice 
//function declaration 
function getComputerChoice(){
    //randomly returns rock paper or scissors and stores it in a variable 
//create  an array  that stores the computers random selection 
var options = ['rock','paper', 'scissors']
//get the random selection then assign it to a variable
let get_Choice = Math.floor(Math.random()*options.length);
let result = options[get_Choice];
console.log(result);
     
 

}
getComputerChoice()


//