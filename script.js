let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let user = document.querySelector('#user');
let comp = document.querySelector('#comp');
let msg = document.querySelector('#msg');
let msgBox = document.querySelector('.msg-container');
let select = document.querySelectorAll('.select');

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const choice = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * 3);
    return choice[random];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = '#08b408';
        msgBox.style.color = 'white';
    } else {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msgBox.style.backgroundColor = '#c92424d8';
        msgBox.style.color = 'white';
    }
}

const drawGame = (userChoice, compChoice) => {
    msg.innerText = `Draw Game`;
    msgBox.style.backgroundColor = '#f7a317ab';
    msgBox.style.color = '#7f0101';
}

const playGame = (userChoice) => {
    console.log('user choice = ', userChoice);
    const compChoice = genCompChoice();
    console.log('comp choice = ', compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            //compChoice == 'paper' or 'scissor'
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            //compChoice == 'rock' or 'scissor'
            userWin = compChoice === 'scissor' ? false : true;
        } else {
            //compChoice == 'rock' or 'paper'
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

select.forEach((select) => {
    select.addEventListener('click', () => {
        let userChoice = select.getAttribute('id');
        playGame(userChoice);
    })
})