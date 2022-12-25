let game = 0;
let win = 0;
let tie = 0;
let lose = 0;
let status = "";


function getHumanChoice() {
  document.getElementById("overallWinner").innerHTML = "";
  document.getElementById("title").innerHTML = "Rock Paper Scissors Game  :" + game ;
let humanChoice =  prompt ('Please type "rock" , "paper" or "scissors"' , "rock");

    if (humanChoice != null) {
         humanChoice = humanChoice.toLowerCase();
         let computer = getComputerChoice();
         let result = "";
        console.log(humanChoice);
         
         

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        document.getElementById("humanResult").innerHTML = "you chose :" + humanChoice ;
       
        game = game +1 ;

        // rock 
           if ((humanChoice === "rock") && (computer === "rock")) {
             result = "tie";
             tie = tie + 1;
             }
           else if ((humanChoice === "rock") && (computer === "paper")){
            result = "lose";
            lose = lose +1;
            
          }
            else if ((humanChoice === "rock") && (computer === "scissors")){
             result = "win";
             win = win +1;}
             

        // paper

        else if ((humanChoice === "paper") && (computer === "rock")) {
          result = "win";
          win = win +1;
        }
        else if ((humanChoice === "paper") && (computer === "paper")){
         result = "tie";
         tie = tie + 1;
       }
         else if ((humanChoice === "paper") && (computer === "scissors")){
          result = "lose";
          lose = lose +1;}

        //   scissors

        if ((humanChoice === "scissors") && (computer === "rock")) {
          result = "lose";
          lose = lose +1;
        }
        else if ((humanChoice === "scissors") && (computer === "paper")){
         result = "win";
         win = win +1;
       }
         else if ((humanChoice === "scissors") && (computer === "scissors")){
          result = "tie";
          tie = tie + 1;
        }



         document.getElementById("winorlose").innerHTML = "Game number " + (game - 1) + " result is :"+ result;
         document.getElementById("computerResult").innerHTML = "computer chose : " + computer;
         document.getElementById("winCount").innerHTML = "Wins : " + win;
         document.getElementById("loseCount").innerHTML = "Lose : " + lose;
         document.getElementById("tieCount").innerHTML = "Tie : " + tie;
        }
        else  {
            alert( "please check your spelling");
        }
        
      
   
 
   if (win < lose){
     status = "YOU LOSE";}
     else if (win > lose){
       status = "YOU WIN"
     }
     else if (win === lose) {
      status = " TIED GAME!"
     }

   if (game === 6  ) {
    alert("game over !!!! "  + status);
    document.getElementById("overallWinner").innerHTML = status;
    

    win =0;
    tie = 0;
    lose = 0;
    game = 1;

   }
  
  }
     
}
game = game = 1 ;
console.log(game);

function getComputerChoice() {
    let computerC1= Math.floor(Math.random() * 3) + 1;
      if (computerC1 === 1) {
        let computerChoice = "rock" ;
        return computerChoice ;
      }

      else if (computerC1 === 2) {
        let computerChoice = "paper" ;
        return computerChoice ;
      }

      else if (computerC1 === 3) {
        let computerChoice = "scissors" ;
        return computerChoice ;
      }
  }

function human () {
  return (document.getElementById('humanChoiceId').innerHTML);
}


