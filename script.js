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

 const computer_selection = getComputerChoice()
//function that asks the player for their choice and then stores it in a variable





let compScore = 0
let playerScore = 0
let roundsPlayed = 0

function playRound(player_Selection, computer_selection) {
    let resultText = document.querySelector('.Score');
    let playerWin = document.querySelector('.player');
    let computerWin = document.querySelector('.computer');
    


    //Function that has the win/loss conditions for player and computer and compares their inputs 
   
   
        
    

     if (player_Selection === computer_selection) {
        
        resultText.textContent="Its a Tie and we dont count those !";
        
    } else if (
        (player_Selection === "rock" && computer_selection === "scissors") ||
        (player_Selection === "paper" && computer_selection === "rock") ||
        (player_Selection === "scissors" && computer_selection === "paper")
        
    ) { playerScore++
        roundsPlayed++
        playerWin.textContent = `Player: ${playerScore}`
         resultText.textContent= "You won this round , dont drop the ball now "
         keepScore();
    } else {
        roundsPlayed++
        compScore++
        computerWin.textContent = `Computer: ${compScore}`
        resultText.textContent= "You lost the round, Maybe you should stick to baking 👀 "
        keepScore();
   
    }
        
    
}
function playerChoice(){
    let playerButtonClick = document.querySelectorAll('button')
    const gameButtons = document.getElementsByClassName('gameChoices')
    let player_Selection;
    playerButtonClick.forEach((button)=>{
        button.addEventListener('click',()=>{
            player_Selection = button.id
            console.log(player_Selection)
            let computer_selection = getComputerChoice()
            playRound(player_Selection,computer_selection)
           

        })
     
            if (roundsPlayed === 5) {
                gameButtons.forEach(button => {
                    button.disabled = true; // Disable the button
                });
            }
            
 
        }
       
    
    )}

playerChoice()

function keepScore(){
    const gameButtons = document.querySelectorAll('.gameChoices')
    
    const whoWon = document.querySelector('.Winner')
    
        if ((playerScore>compScore) && (roundsPlayed === 5)) {
            whoWon.textContent = "Cool happy fresh! You WON! maybe baking isnt the only thing ur good at  ";
            gameButtons.forEach(button =>{
                button.disabled = true;
            })

            
            
        } else if((compScore > playerScore) && (roundsPlayed === 5)){
            whoWon.textContent = "Elise you actually lost to my below average CPU, an IQ test is in order when you're back 😬";
            gameButtons.forEach(button =>{
                button.disabled = true;
            })
            
      
    }
}

function Restartgame(){
    const restartBtn = document.querySelector('.reset')
    // const resultText = document.querySelector('.Score')
    // const playerWin = document.querySelector('.Player')
    // const computerWin = document.querySelector(".Computer")
    restartBtn.addEventListener('click',()=>{
        location.reload()

    })
    
}
Restartgame()

// function games_Played(){
//     //2 variables to keep track of player and computer scores 
//     let Comp_wins = 0
//     let player_wins = 0
//     //loop to go infinitely until the condition is reached 
//     //The condition being the player or computer reaching a score of 3 
  
//     while (true) {
        
//         let playerCard = document.querySelector('.player')
//         let computerCard = document.querySelector('.computer')
//         let resultCard = document.querySelector('.Score')
//         // let computer_selection = getComputerChoice();
//         let player_Selection = getPlayerSelection()
        
//         let result = playRound(player_Selection, computer_selection);
//         resultCard.textContent = `${result}`;
//         //use string method to check the output of the function to decide who won
//         if(result.includes("tie")){
//             resultCard.textContent = "its a tie lets play another round"
            
//         } else if( result.includes("Player")){
//            playerCard.textContent =` Player: ${player_wins++}`

//         } else{
//             computerCard.textContent = ` Computer: ${Comp_wins++}`
//         }
//         resultCard.textContent= `Player score is ${player_wins}. Computer score is ${Comp_wins}`
//         // condition to break out of the loop using score 
//         if (player_wins === 5) {
//             resultCard.textContent = "player wins the game !"
            
//         } else if (Comp_wins === 5){
//             resultCard.textContent = "Computer wins the game"
//             break 
//         }
//     }
// }

  
 



    
// games_Played()

