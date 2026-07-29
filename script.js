let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const ourDiv = document.getElementById("results");

let playerChoice = null;

let computerChoicee = null;

function computerChoice(){
    let re = Math.floor(Math.random() * 3) + 1;
    switch(re){
            case 1:
                computerChoicee = "ROCK";
                break;
            case 2:
                computerChoicee = "PAPER";
                break;
            case 3:
                computerChoicee = "SCISSORS";
                break;
            default:
                console.log("test");
                break;
        return computerChoicee;
    };
}

let rounds = 0;

rock.onclick = function(){
    PlayRound("ROCK")
    rounds++
};

scissors.onclick = function(){
    PlayRound("SCISSORS")
    rounds++
};

paper.onclick = function(){
    PlayRound("PAPER")
    rounds++
};



async function PlayRound(option){
    computerChoice()
    if(option===computerChoicee){
        console.log("Tie!");
    } else if(option==="ROCK" && computerChoicee==="PAPER"){
        console.log("You Lost!");
        computerScore++;
    } else if(option==="PAPER" && computerChoicee==="ROCK"){
        console.log("You Win!");
        playerScore++;
    } else if(option==="PAPER" && computerChoicee==="SCISSORS"){
        console.log("You Lost!");
        computerScore++;
    } else if(option==="ROCK" && computerChoicee==="SCISSORS"){
        console.log("You Win!");
        playerScore++;
    } else if(option==="SCISSORS" && computerChoicee==="ROCK"){
        console.log("You Lost!");
        computerScore++;
    } else if(option==="SCISSORS" && computerChoicee==="PAPER"){
        console.log("You Win!");
        playerScore++;
    } else {
        console.log("bug")
    }

    if(rounds>=4){
        ourDiv.innerHTML = `<center><br><h1> ${playerScore} : ${computerScore}</h1></center>`
    }
}
