let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const GameDraw = () =>{
    // console.log("It's a draw");
    msg.innerText = "It's a draw! Play again";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose!");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    // console.log("user's choice Id = ", userChoice);
    
    // now generate computer choice 
    // ****modular programming
    const compChoice = genCompChoice();
    // console.log("comp's choice Id = ", compChoice);

    if(userChoice === compChoice){
        // draw game
        GameDraw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor , paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // scissor , rock
            userWin = compChoice === "scissors" ? false : true;
        } else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("click", userchoice);

        playGame(userchoice);
    });
});