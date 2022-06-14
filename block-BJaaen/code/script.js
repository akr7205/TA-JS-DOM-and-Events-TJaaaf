let userscore = document.querySelector('.user-score');
let computerscore = document.querySelector('.computer-score');
let userIcon = document.querySelector('.user-icon');
let computerIcon = document.querySelector('.computer-icon');
let userBtns = document.querySelector('.user-btns');
let computerBtns = document.querySelector('.computer-btns');
let result = document.querySelector('.result');
let reset = document.querySelector('.reset');
let pScore = 0;
let cScore = 0;

userBtns.addEventListener('click', (e) => comparechoice(e));

function comparechoice(e) {
    let pChioce = e.target.dataset.text;
    let compChoice=generateComputerChoice();
    computerIcon.innerHTML = compChoice;
    console.log(pChioce);
    console.log(compChoice);
    userIcon.innerHTML = pChioce;
    getResult(pChioce,compChoice);
}

function getResult(pChioce,compChoice) {
    if (pChioce === compChoice) {
        result.innerText = "Draw";
      } else if (pChioce === "Rock" && compChoice === "Paper") {
        result.innerText = "Computer wins";
        cScore++;
      } else if (pChioce === "Rock" && compChoice === "Scissor") {
        result.innerText = "You win";
        pScore++;
      } else if (pChioce === "Paper" && compChoice === "Scissor") {
        result.innerText = "Computer wins";
        cScore++;
      } else if (pChioce === "Paper" && compChoice === "Rock") {
        result.innerText = "You win";
        pScore++;
      } else if (pChioce === "Scissor" && compChoice === "Paper") {
        result.innerText = "You win";
        pScore++;
      } else if (pChioce === "Scissor" && compChoice === "Rock") {
        result.innerText = "Computer wins";
        cScore++;
      }
      userscore.innerHTML= pScore;
      computerscore.innerHTML=cScore;
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 ;
    
    if (randomNumber === 1) {
      return 'Rock';
    }
    if (randomNumber === 2) {
        return 'Scissor';
        
    }
    if (randomNumber === 3) {
      return 'Paper';
    }
    
  }

reset.addEventListener('click', (e) => {
  pScore=0;
  cScore=0;
  userscore.innerHTML= pScore;
  computerscore.innerHTML=cScore;
})
