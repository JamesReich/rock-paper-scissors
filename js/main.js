const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const cRock = document.getElementById('computer-rock');
const cPaper = document.getElementById('computer-paper');
const cScissors = document.getElementById('computer-scissors');

const playerScoreHTML = document.getElementById('player-score');
const computerScoreHTML = document.getElementById('computer-score');

const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');

let playerScore = 0;
let computerScore = 0;

let playerChose = false;
let computerChose = false;

let playersPick;
let computerPick;


function getComputerChoice() {

    let random = Math.floor(Math.random() * 12 + 1);

    if (random <= 4) {

        computerChoice.innerHTML = `Computer Chose: Rock`;
        cRock.style.backgroundColor = 'rgba(0, 255, 200, 0.3)';
        cRock.style.borderLeft = '3px solid rgb(0, 255, 200)';
        cRock.style.borderRight = '3px solid rgb(0, 255, 200)';
        computerChose = true;
        computerPick = 'rock';
        return 'rock'

    } else if (random <= 8) {

        computerChoice.innerHTML = `Computer Chose: Paper`;
        cPaper.style.backgroundColor = 'rgba(0, 255, 200, 0.3)';
        cPaper.style.borderLeft = '3px solid rgb(0, 255, 200)';
        cPaper.style.borderRight = '3px solid rgb(0, 255, 200)';
        computerChose = true;
        computerPick = 'paper';
        return 'paper';

    } else if (random <= 12) {

        computerChoice.innerHTML = `Computer Chose: Scissors`;
        cScissors.style.backgroundColor = 'rgba(0, 255, 200, 0.3)';
        cScissors.style.borderLeft = '3px solid rgb(0, 255, 200)';
        cScissors.style.borderRight = '3px solid rgb(0, 255, 200)';
        computerChose = true;
        computerPick = 'scissors';
        return 'scissors';

    }

}

function clearUI() {

    cScissors.style.backgroundColor = '';
    cScissors.style.borderLeft = '';
    cScissors.style.borderRight = '';

    cPaper.style.backgroundColor = '';
    cPaper.style.borderLeft = '';
    cPaper.style.borderRight = '';

    cRock.style.backgroundColor = '';
    cRock.style.borderLeft = '';
    cRock.style.borderRight = '';

}



function getPlayerChoice(choice) {

    if (choice == 'rock') {

        playersPick = 'rock';
        playerChoice.innerHTML = `Player Chose: Rock`;
        playerChose = true;

    }
    if (choice == 'paper') {

        playersPick = 'paper';
        playerChoice.innerHTML = `Player Chose: Paper`;
        playerChose = true;

    }
    if (choice == 'scissors') {

        playersPick = 'scissors';
        playerChoice.innerHTML = `Player Chose: Scissors`;
        playerChose = true;


    }


    checkWin();


}

rock.addEventListener('click', function () { getPlayerChoice('rock') });

paper.addEventListener('click', function () { getPlayerChoice('paper') });

scissors.addEventListener('click', function () { getPlayerChoice('scissors') });

getPlayerChoice();


function checkWin() {

    if (playerChose == true) {

        clearUI();
        getComputerChoice();

    }

    if (playersPick == 'rock' && computerPick == 'scissors') {

        playerScoreHTML.innerHTML = `Player: ${playerScore += 1}`;

    }
    if (playersPick == 'scissors' && computerPick == 'paper') {

        playerScoreHTML.innerHTML = `Player: ${playerScore += 1}`;

    }
    if (playersPick == 'paper' && computerPick == 'rock') {

        playerScoreHTML.innerHTML = `Player: ${playerScore += 1}`;

    }


    if (playersPick == 'scissors' && computerPick == 'rock') {

        computerScoreHTML.innerHTML = `Computer: ${computerScore += 1}`;

    }
    if (playersPick == 'paper' && computerPick == 'scissors') {

        computerScoreHTML.innerHTML = `Computer: ${computerScore += 1}`;

    }
    if (playersPick == 'rock' && computerPick == 'paper') {

        computerScoreHTML.innerHTML = `Computer: ${computerScore += 1}`;

    }

    if (playersPick == 'rock' && computerPick == 'rock') {



    }
    if (playersPick == 'paper' && computerPick == 'paper') {



    }
    if (playersPick == 'scissors' && computerPick == 'scissors') {



    }





}






















