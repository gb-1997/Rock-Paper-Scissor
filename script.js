let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
let scoreCard_div = document.querySelector(".score-card");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNo = Math.floor(Math.random()*3);
    return choices[randomNo];
}

function getChoice(choice){
    if(choice==="p")
        return ("Paper");
    else if(choice==="r")
        return ("Rock");   
    else
        return ("Scissor");     
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smalluser = "User".fontsize(3).sub();
    const smallcomp = "Computer".fontsize(3).sub();
    result_p.innerHTML = `${getChoice(userChoice)}${smalluser} beats ${getChoice(computerChoice)}${smallcomp}. You WIN!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smalluser = "User".fontsize(3).sub();
    const smallcomp = "Computer".fontsize(3).sub();
    result_p.innerHTML = `${getChoice(computerChoice)}${smallcomp} beats ${getChoice(userChoice)}${smalluser}. You LOSE!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 1000);
}

function draw(userChoice, computerChoice)
{
    const smalluser = "User".fontsize(3).sub();
    const smallcomp = "Computer".fontsize(3).sub();
    result_p.innerHTML = `${getChoice(userChoice)}${smallcomp} equals ${getChoice(computerChoice)}${smalluser}. Its a DRAW!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 1000);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "pr":
        case "sp":
        case "rs":
            win(userChoice,computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice,computerChoice);               
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();

