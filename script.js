let playerScore = 0
let computerScore = 0

const computerChoice = []
const list = []

let number = 0
let number2 = 0
let number3 = 0


for(let i = 0; i <= 2; i++){
    let input = prompt("rock paper scissors")
    const result = input.toUpperCase()

    list.push(result)
}

while(number2<=2){
    let re = Math.floor(Math.random() * 3) + 1
    switch(re){
        case 1:
            computerChoice.push("ROCK")
            break
        case 2:
            computerChoice.push("PAPER")
            break
        case 3:
            computerChoice.push("SCISSORS")
            break
        default:
            console.log("test")
            break
    }
    number2++
}


console.log("player choice: " + list)
console.log("computer choices " + computerChoice)

while(number<=2){
    if(list[number]===computerChoice[number3]){
        console.log("Tie!")
    } else if(list[number]==="ROCK" && computerChoice[number3]==="PAPER"){
        console.log("You Lost!")
        computerScore++
    } else if(list[number]==="PAPER" && computerChoice[number3]==="ROCK"){
        console.log("You Win!")
        playerScore++

    } else if(list[number]==="PAPER" && computerChoice[number3]==="SCISSORS"){
        console.log("You Lost!")
        computerScore++
    } else if(list[number]==="ROCK" && computerChoice[number3]==="SCISSORS"){
        console.log("You Win!")
        playerScore++

    } else if(list[number]==="SCISSORS" && computerChoice[number3]==="ROCK"){
        console.log("You Lost!")
        computerScore++
    } else if(list[number]==="SCISSORS" && computerChoice[number3]==="PAPER"){
        console.log("You Win!")
        playerScore++
    }

    number++
    number3++
    
}

console.log(playerScore)
console.log(computerScore)