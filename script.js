//Start with a function to get the computer choice 
//function declaration 
function getComputerChoice(){
    //randomly returns rock paper or scissors and stores it in a variable 
//create  an array  that stores the computers random selection 
    var options = ['rock','paper', 'scissors']
//get the random selection then assign it to a variable
    var get_Choice = Math.floor(Math.random()*options.length);
    var result = options[get_Choice].toLowerCase();
    return result;
     
 

}

 var computer_selection = getComputerChoice()
//function that asks the player for their choice and then stores it in a variable
function get_player_choice(){
    let choice = prompt("Rock, Paper , Scissors  ?")
    var lower_case_Choice = choice.toLowerCase()
    return lower_case_Choice;

}
var player_Selection = get_player_choice()

function playRound(player_Selection,computer_selection){
    let player_Score = 0
    let computer_Score = 0
    // Plays a single round of RPS and identifies winning/losing conditions
    //win 

    // issue is code runs but the winning / loss /tie conditions arent being evaluated 
    // code skips to the else block without evaluating if statements
    if(player_Selection === computer_selection){
        return "Its a tie "
    } else if(player_Selection === "rock" && computer_selection === "scissors " ||
              player_Selection === "paper" && computer_selection === "rock" || 
              player_Selection === "scissors" && computer_selection === "paper"){
        player_Score++
        console.log(`player wins player: ${player_Score}- computer score: ${computer_Score}`)
        return true
    } else{
        computer_Score++
        console.log(`player lost score is player: ${player_Score}- computer score: ${computer_Score}`)
        return false
    }
}
            
        
    
    
        
    

console.log(playRound(player_Selection,computer_selection))
playRound(player_Selection,computer_selection)
playRound(player_Selection,computer_selection)
playRound(player_Selection,computer_selection)
playRound(player_Selection,computer_selection)