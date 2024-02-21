//Start with a function to get the computer choice 
//function declaration 
function getComputerChoice(){
    //randomly returns rock paper or scissors and stores it in a variable 
//create  an array  that stores the computers random selection 
    var options = ['rock','paper', 'scissors']
//get the random selection then assign it to a variable
    var get_Choice = Math.floor(Math.random()*options.length);
    var result = options[get_Choice].toLowerCase();
    console.log(`The computer chose ${result}`)
    return result;
     
 

}

 var computer_selection = getComputerChoice()
//function that asks the player for their choice and then stores it in a variable
function get_player_choice(){
    let choice = prompt("Rock, Paper , Scissors  ?")
    var lower_case_Choice = choice.toLowerCase()
    console.log(`The player chose ${lower_case_Choice}`)
    if(["rock", "paper","scissors"].includes(lower_case_Choice)){
        return lower_case_Choice
    } else{
        console.log("Invalid choice! please enter rock or paper or scissors")
    }

}
var player_Selection = get_player_choice()



function playRound(player_Selection, computer_selection) {
    //Function that has the win/loss conditions for player and computer and compares their inputs 
    if (player_Selection === computer_selection) {
        return "It's a tie!";
    } else if (
        (player_Selection === "rock" && computer_selection === "scissors") ||
        (player_Selection === "paper" && computer_selection === "rock") ||
        (player_Selection === "scissors" && computer_selection === "paper")
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}
function games_Played(){
    //2 variables to keep track of player and computer scores 
    let Comp_wins = 0
    let player_wins = 0
    //loop to go infinitely until the condition is reached 
    //The condition being the player or computer reaching a score of 3 
    while (true) {
        var computer_selection = getComputerChoice();
        var player_Selection = get_player_choice();
        var result = playRound(player_Selection, computer_selection);
        console.log(result);
        //use string method to check the output of the function to decide who won
        if(result.includes("tie")){
            console.log("its a tie lets play another round")
        } else if( result.includes("Player")){
            player_wins++
        } else{
            Comp_wins++
        }
        console.log(`Player score is ${player_wins}. Computer score is ${Comp_wins}`)
        // condition to break out of the loop using score 
        if (player_wins === 3) {
            console.log("player wins the game !")
            break
            
        } else if (Comp_wins === 3){
            console.log("Computer wins the game")
            break 
        }
    }
    

  
}
// games_Played()

        

    


