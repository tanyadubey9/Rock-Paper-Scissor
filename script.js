let user = document.querySelector('#user');
let comp = document.querySelector('#comp');
let msg = document.querySelector('#msg');
let msgBox = document.querySelector('.msg-container');
let select = document.querySelectorAll('.select');
let resetBtn = document.querySelector('#reset-btn');
let compImg = document.querySelector('#comp-img');

const winSound = new Audio('./sounds/win.mp3');
const loseSound = new Audio('./sounds/lose.mp3');
const clickSound = new Audio('./sounds/click.mp3');

let userScore = 0; 
let compScore = 0;

const genCompChoice = () => {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `🎉 You Win! ${compChoice} beats your ${userChoice}`;
        msgBox.style.backgroundColor = '#08b408';
        msgBox.style.color = 'white';
        winSound.play();
    } else {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `😢 You Lose! ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = '#c92424d8';
        msgBox.style.color = 'white';
        loseSound.play();
    }

    // Match end condition
    if (userScore === 5 || compScore === 5) {
        msg.innerText = userScore === 5 
            ? "🏆 You Won the Match!" 
            : "💻 Computer Won the Match!";
    }
}

const drawGame = () => {
    msg.innerText = "😐 Draw Game";
    msgBox.style.backgroundColor = '#f7a317ab';
    msgBox.style.color = '#7f0101';
}

const playGame = (userChoice) => {
    msg.innerText = "Computer is thinking...";

    setTimeout(() => {
        const compChoice = genCompChoice();
        compImg.src = `./Images/${compChoice}.png`;

        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;

            if (userChoice === 'rock') {
                userWin = compChoice === 'paper' ? false : true;
            } else if (userChoice === 'paper') {
                userWin = compChoice === 'scissor' ? false : true;
            } else {
                userWin = compChoice === 'rock' ? false : true;
            }

            showWinner(userWin, userChoice, compChoice);
        }
    }, 500);
}

// Click events
select.forEach((el) => {
    el.addEventListener('click', () => {
        clickSound.play();

        select.forEach(s => s.style.border = "none");
        el.style.border = "3px solid green";

        let userChoice = el.getAttribute('id');
        playGame(userChoice);
    });
});

// Reset
resetBtn.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;

    user.innerText = 0;
    comp.innerText = 0;

    msg.innerText = "Play Your Move!";
    msgBox.style.backgroundColor = '#f4c758';
    msgBox.style.color = '#930000';

    compImg.src = "./Images/rock.png";
});
