const addImg = document.createElement('img');
const rollDice = document.getElementById('rollDice');
const newGame = document.getElementById('newGame');
// const scoreDigit = document.querySelector('#scoreDigit');
const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');
const scoreDigitOne = document.querySelector('.score-digit-one');
const scoreDigitTwo = document.querySelector('.score-digit-two');
const holdBtn = document.querySelector('.hold');
const cummulativeScoreOne = document.querySelector('.cummulative-score-one');
const cummulativeScoreTwo = document.querySelector('.cummulative-score-two');
let totalMarkOne = 0;
let totalMarkTwo = 0;
let totalScore = 0;
let currentScore = 0;

alert(  `Welcome to Viking Dice Game !
You will be prompted to enter a mark where the first player
to reach it will emerge the winner.

To play press 'Roll Dice' and press 'Hold' to save
your cummulative mark and pass the dice to the other player.
Also scoring 1 automatically passes the dice to your opponent! 

Press OK to Continue
 `)
 let mark = Number( prompt(`Enter the Mark...   (Srictly as a Number)`, "100"));


rollDice.addEventListener('click', function(){
    if(playerOne.classList.contains('active') === true) {
    currentScore = Math.trunc(Math.random() * 6) + 1;
    let img = newGame.insertAdjacentElement('afterend', addImg);
    img.src = `/assets/dice-${currentScore}.png`;
    img.setAttribute("src", `/assets/dice-${currentScore}.png`);
    img.style.width = '100px';
    if (currentScore === 1){
        playerOne.classList.remove('active');
        playerTwo.classList.add('active');
        totalScore = 0;
        
    } 
    else{
        totalScore += currentScore;
    }
    scoreDigitOne.textContent = totalScore;
    } else{
    let currentScore = Math.trunc(Math.random() * 6) + 1;
    let img = newGame.insertAdjacentElement('afterend', addImg);
    img.src = `/assets/dice-${currentScore}.png`;
    img.setAttribute("src", `/assets/dice-${currentScore}.png`);
    img.style.width = '100px';
    if (currentScore === 1){
        playerTwo.classList.remove('active');
        playerOne.classList.add('active');
        totalScore = 0;
    }else{
        totalScore += currentScore;
    }
    scoreDigitTwo.textContent = totalScore;     
}

// return totalScore;   
})

newGame.addEventListener('click', function(){
    location.reload();
});

holdBtn.addEventListener('click', function() {
    if(playerOne.classList.contains('active') === true){
        totalMarkOne += totalScore;
        cummulativeScoreOne.textContent = totalMarkOne;
        playerOne.classList.remove('active');
        playerTwo.classList.add('active');
        totalScore = 0;
        scoreDigitOne.textContent = totalScore;
        if(totalMarkOne >= mark){
            alert(`PLAYER ONE WON WITH ${totalMarkOne}

Press 'OK' for another round
                `)
            location.reload();
        }

    }else{
        totalMarkTwo += totalScore;
        cummulativeScoreTwo.textContent = totalMarkTwo;
        playerTwo.classList.remove('active');
        playerOne.classList.add('active');
        totalScore = 0;
        scoreDigitTwo.textContent = totalScore;
        if(totalMarkTwo >= mark){
            alert(`PLAYER TWO WON WITH ${totalMarkTwo}

Press 'OK' for another round
                `)
            location.reload();
        }
    }
});