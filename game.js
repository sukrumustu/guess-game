

const randomNumberBtn = document.querySelector('.random-number');

const guessOneInput = document.querySelector('.guess-one-input');
console.log(guessOneInput);

const guessBtnOne = document.querySelector('#guess-btn-one');
console.log(guessBtnOne);

const guessTwoInput = document.querySelector('.guess-two-input');

const guessBtnTwo = document.getElementById('guess-btn-two');

const livesOneLeft = document.querySelector('#lives-one');
const livesTwoLeft = document.querySelector('#lives-two');

const firstPlayerCard = document.querySelector('.first-player-card');
const secondPlayerCard = document.querySelector('.second-player-card');

const increaseDecrease =document.querySelector('.increase-decrease');
console.log(increaseDecrease);

// console.log(guessOne, guessBtnOne, guessBtnTwo, guessTwo);


let randomNumber;
let allLives = 8;
let livesOne = 4;
let livesTwo = 4;


randomNumberBtn.addEventListener('click', () => {
randomNumber = Math.round(Math.random() * 100)

console.log(randomNumber);

guessBtnOne.addEventListener('click', () => { 
    if(!parseInt(guessOneInput.value)){
            alert('Please enter a number.');
    
        } else if(parseInt(guessOneInput.value) === randomNumber){

            firstPlayerCard.className = 'first-player-card card shadow-lg bg-success';
            livesOneLeft.innerHTML=`Congrats! You are a winner.`;
            livesTwoLeft.innerHTML=`Sorry, you lost.`;
            guessBtnTwo.disabled = true;

        } else if(parseInt(guessOneInput.value) < randomNumber){
            livesOne --;
            allLives --;
            livesOneLeft.innerHTML=`You have ${livesOne} lives left.`;

            increaseDecrease.innerHTML = `INCREASE Player-2 ! <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`;
        } else if(parseInt(guessOneInput.value) > randomNumber){
            livesOne --;
            allLives --;    
            livesOneLeft.innerHTML=`You have ${livesOne} lives left.`;
            increaseDecrease.innerHTML=`DECREASE Player-2 ! <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`;
            }
        if (livesOne === 0) {
            livesOneLeft.innerHTML=`Sorry Player-1, you are loser.`;}
   
});

guessBtnTwo.addEventListener('click', () => { 
    if(!parseInt(guessTwoInput.value)){
            alert('Please enter a number.');
    
        } else if(parseInt(guessTwoInput.value) === randomNumber){

            secondPlayerCard.className = 'second-player-card card shadow-lg bg-success';
            livesTwoLeft.innerHTML=`Congrats! You are a winner.`;
            livesOneLeft.innerHTML=`Sorry, you lost.`;
            guessBtnOne.disabled = true;


        } else if(parseInt(guessTwoInput.value) < randomNumber){
            livesTwo --;
            allLives --;
            livesTwoLeft.innerHTML=`You have ${livesTwo} lives left.`;

            increaseDecrease.innerHTML = `INCREASE Player-1 ! <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`;
        } else if(parseInt(guessTwoInput.value) > randomNumber){
            livesTwo --;
            allLives --;    
            livesTwoLeft.innerHTML=`You have ${livesTwo} lives left.`;
            increaseDecrease.innerHTML=`DECREASE Player-1 ! <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`;
            }
        if (livesTwo === 0) {
            livesTwoLeft.innerHTML=`Sorry Player-2, you are loser, too.`;}
   
});

});



