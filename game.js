

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

const againBtn = document.querySelector('.again-btn');

// console.log(guessOne, guessBtnOne, guessBtnTwo, guessTwo);


let randomNumber;
let allLives = 8;
let livesOne = 4;
let livesTwo = 4;

let totalScoreOne = localStorage.getItem('totalScoreOne') || 0;
let totalScoreTwo = localStorage.getItem('totalScoreTwo') || 0;

document.querySelector('#total-score-one').innerText = `Total Score = ${totalScoreOne}`;
document.querySelector('#total-score-two').innerText =`Total Score = ${totalScoreTwo}`;


randomNumberBtn.addEventListener('click', () => {
randomNumber = Math.round(Math.random() * 100)
increaseDecrease.innerText = "Secret-Number: ???"

console.log(randomNumber);

guessBtnOne.addEventListener('click', () => { 

    if(!parseInt(guessOneInput.value)){
            alert('Please enter a number.');
    
        } else if(parseInt(guessOneInput.value) === randomNumber){

            firstPlayerCard.className = 'first-player-card card shadow-lg bg-success';
            livesOneLeft.innerHTML=`Congrats! You are a winner.`;
            livesTwoLeft.innerHTML=`Sorry, you lost.`;
            guessBtnTwo.disabled = true;
            increaseDecrease.innerText = `Secret-Number: ${randomNumber}`;
            localStorage.setItem('totalScoreOne', Number(totalScoreTwo) + 10);
          
            document.querySelector('#total-score-one').innerText = `Total Score = ${totalScoreOne}`;


        } else if(parseInt(guessOneInput.value) < randomNumber){
            livesOne --;
            allLives --;
            guessBtnOne.disabled = true;
            if(guessBtnTwo.disabled) {guessBtnTwo.disabled = false}

            livesOneLeft.innerHTML=`You have ${livesOne} lives left.`;
            increaseDecrease.innerHTML = `INCREASE Player-2 ! <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`;
        } else if(parseInt(guessOneInput.value) > randomNumber){
            livesOne --;
            allLives --;

            guessBtnOne.disabled = true;
            if(guessBtnTwo.disabled) {guessBtnTwo.disabled = false}
                
            livesOneLeft.innerHTML=`You have ${livesOne} lives left.`;
            increaseDecrease.innerHTML=`DECREASE Player-2 ! <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`;
            }
        if (livesOne === 0) {
            livesOneLeft.innerHTML=`Sorry Player-1, you are loser.`;
            guessBtnOne.disabled = true;
            
            
        }
   
});

guessBtnTwo.addEventListener('click', () => { 

    if(!parseInt(guessTwoInput.value)){
            alert('Please enter a number.');
    
        } else if(parseInt(guessTwoInput.value) === randomNumber){

            secondPlayerCard.className = 'second-player-card card shadow-lg bg-success';
            livesTwoLeft.innerHTML=`Congrats! You are a winner.`;
            livesOneLeft.innerHTML=`Sorry, you lost.`;
            guessBtnOne.disabled = true;
            increaseDecrease.innerText = `Secret-Number: ${randomNumber}`;
            localStorage.setItem('totalScoreTwo', Number(totalScoreTwo) + 10);
            document.querySelector('#total-score-two').innerText = `Total Score = ${totalScoreTwo}`;


        } else if(parseInt(guessTwoInput.value) < randomNumber){
            livesTwo --;
            allLives --;

            guessBtnTwo.disabled = true;
            if(guessBtnOne.disabled) {guessBtnOne.disabled = false}

            livesTwoLeft.innerHTML=`You have ${livesTwo} lives left.`;
            
            increaseDecrease.innerHTML = `INCREASE Player-1 ! <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`;
        } else if(parseInt(guessTwoInput.value) > randomNumber){
            livesTwo --;
            allLives --;    

            guessBtnTwo.disabled = true;
            if(guessBtnOne.disabled) {guessBtnOne.disabled = false}
            livesTwoLeft.innerHTML=`You have ${livesTwo} lives left.`;
           
            increaseDecrease.innerHTML=`DECREASE Player-1 ! <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`;
            }
        if (livesTwo === 0) {
            livesTwoLeft.innerHTML=`Sorry Player-2, you are loser, too.`;
            guessBtnOne.disabled = true;
            
        }
   
});


});

againBtn.onclick = () => {
livesOne = 4;
livesOne = 4;
allLives = 8;
increaseDecrease.innerText= "Starting...";
livesOneLeft.innerHTML=`You have 4 lives.`;
livesTwoLeft.innerText="You have 4 lives.";
guessBtnOne.disabled = false;
guessBtnTwo.disabled = false;
guessOneInput.value = "";
guessTwoInput.value = "";
firstPlayerCard.className = 'first-player-card card shadow-lg';
secondPlayerCard.className = 'first-player-card card shadow-lg';
};



// let a = localStorage.getItem('a') || 0;
// console.log(a);
// localStorage.setItem('a', '3');
// console.log(a);


//? bu fonksiyon local storage update edildikten sonra DOM'un render edilmesini sağlayabilir.

// const asyncLocalStorage = {
//     setItem: function (key, value) {
//         return Promise.resolve().then(function () {
//             localStorage.setItem(key, value);
//         });
//     },
//     getItem: function (key) {
//         return Promise.resolve().then(function () {
//             return localStorage.getItem(key);
//         });
//     }
// };
