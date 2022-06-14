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

function generateComputerChoice(e) {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

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
function getResult(pChioce, compChoice) {
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
  userscore.innerHTML = pScore;
  computerscore.innerHTML = cScore;
}



let comparechoice = (e) => {
  let pChioce = e.target.dataset.text;
  userBtns.querySelector('.Rock').classList.remove('active');
  userBtns.querySelector('.Paper').classList.remove('active');
  userBtns.querySelector('.Scissor').classList.remove('active');

  userBtns.querySelector(`.${pChioce}`).classList.add('active');

  let compChoice = generateComputerChoice();
  //computer choices
  computerBtns.querySelector('.Rock').classList.remove('active');
  computerBtns.querySelector('.Paper').classList.remove('active');
  computerBtns.querySelector('.Scissor').classList.remove('active');

  computerBtns.querySelector(`.${compChoice}`).classList.add('active');

  computerIcon.innerHTML = compChoice;
  console.log(pChioce);
  console.log(compChoice);
  userIcon.innerHTML = pChioce;
  getResult(pChioce, compChoice);
}



reset.addEventListener('click', (e) => {
  pScore = 0;
  cScore = 0;
  userscore.innerHTML = pScore;
  computerscore.innerHTML = cScore;
})
