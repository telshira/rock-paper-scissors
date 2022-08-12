const submit = document.querySelector('input[type="submit"]');
const inputs = document.querySelectorAll('input');
const nameInput = document.querySelector(`input[type='text']`);
const messageBox = document.getElementById('message-box');
const form = document.getElementById("name-input");
const playerOne = {username: '', score: 0};
const playerTwo = {username: 'Computer', score: 0};

form.addEventListener('submit', loadIntro, false);

function getName(){
  let name = nameInput.value;
  let array = name.split(' ');
  let userName = '';
  let regex = new RegExp(/^[A-Za-z\s]*$/);
  if (!nameInput.value || !nameInput.value.match(regex)) {
    nameInput.value = '';
    alert('Please enter your name.');
  } else {
   array = array.map(name => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    })
    userName = array.join(" ");
  }
  playerOne.username = userName;
}

const mainNameCont = document.querySelectorAll('div.main-name-containers');
//load welcome screen once we submit name
function loadIntro(e) {
  e.preventDefault();
  getName();
  if (playerOne.username){
    // removes inputs once name is received
    form.style.display = "none";
    if (playerOne.username.length > 13){
      playerOne.username = playerOne.username.slice(0, 13);
    }
    createWelcomeBox();
  }
}

function createWelcomeBox(){
  let welcomeContainer = document.createElement('div');
  let introTop = document.createElement('div');
  let introBottom = document.createElement('div');
  let welcomeIntro = document.createElement('h1');
  let welcomeName = document.createElement('h3');
  let welcomeText = document.createElement('p');
  let startBtn = document.createElement('button');
  introTop.className = 'top';
  introBottom.className = 'bottom'
  startBtn.className = 'start-button';
  startBtn.setAttribute('style', 'background-color: palevioletred; color: white; font-size: large')
  startBtn.textContent = 'Start';
  welcomeContainer.className = 'welcome-container';
  welcomeName.textContent = `${playerOne.username}`;
  welcomeIntro.append(welcomeName);
  welcomeIntro.textContent = `Welcome! `;
  welcomeText.textContent = `Click the start button to begin.`
  introTop.appendChild(welcomeIntro);
  introTop.appendChild(welcomeName);
  introBottom.appendChild(welcomeText);
  introBottom.appendChild(startBtn);
  welcomeContainer.appendChild(introTop);
  welcomeContainer.appendChild(introBottom);
  messageBox.appendChild(welcomeContainer);
}

const playerCont = document.getElementById('player');
const playerName = document.getElementById('player-name');
const playerPort = document.getElementById('player-portrait');
const playerPts = document.getElementById('player-points');
const plyrScoreCtnr = document.getElementById('player-score');

const computerCont = document.getElementById('computer');
const computerName = document.getElementById('computer-name');
const computerPort = document.getElementById('computer-portrait');
const computerPts = document.getElementById('computer-points');
const compScoreCntr= document.getElementById('computer-score');

messageBox.addEventListener('click', createGameUI);

function createGameUI(e){
  //looks for start button in messagebox
  if (e.target.classList.contains('start-button')){
    while (messageBox.firstChild) {
      messageBox.removeChild(messageBox.firstChild);
    };
    gameUI();
  };
}

const buttonImages = document.querySelectorAll('div.image-button');

function toggleRPS(){
  buttonImages.forEach(button => {
    if (button.style.display === "none") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
}

function createPlayerBox() {
  let playerImg = document.createElement('img');
  playerImg.src = "./Images/playerIcon.jpg";
  playerImg.setAttribute('style', 'border-radius: 50%; border: 3px solid palevioletred; box-sizing: border-box');
  playerPort.appendChild(playerImg);
  playerName.appendChild(document.createTextNode(playerOne.username));
  playerName.setAttribute('style', 'color: goldenrod; align-items: center; font-family: "Luckiest Guy"; font-size: 1.5vw; padding: 5px 0; marginBottom: 10px');
  playerCont.appendChild(playerName);
  playerCont.appendChild(playerPort);
  playerCont.style.backgroundColor = "rgb(255, 241, 160)";
}

function createComputerBox() {
  let computerImg = document.createElement('img');
  computerImg.src = "./Images/computerIcon.jpg";
  computerImg.setAttribute('style', 'border-radius: 50%; border: 3px solid rgb(8, 206, 241); box-sizing: border-box');
  computerPort.appendChild(computerImg);
  computerName.appendChild(document.createTextNode(playerTwo.username));
  computerName.setAttribute('style', 'color: goldenrod; align-items: center; font-family: "Luckiest Guy"; font-size: 1.5vw; padding: 5px 0; marginBottom: 10px');
  computerCont.appendChild(computerName);
  computerCont.appendChild(computerPort);
  computerCont.style.backgroundColor = "rgb(255, 241, 160)";
}

//Create scoreboard
const scoreHolder = document.querySelectorAll('div.scores-holder');
const para = document.querySelectorAll('.scores-holder p');
const plyPts = document.getElementById('player-points');
const compPts = document.getElementById('computer-points');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score')

function addScoreBrd(){
  para.forEach(p => {
    p.appendChild(document.createTextNode('Current Score:'));
    p.setAttribute('style', 'font-family: "Luckiest Guy"; font-size:1.5vw');
    p.style.marginBlockStart = '.3em';
    p.style.marginBlockEnd= "1.5em";
  });
  plyPts.appendChild(document.createTextNode(playerOne.score));
  compPts.appendChild(document.createTextNode(playerTwo.score));
  let ptStyle = 'font-weight: bolder; font-size: 5vw; color: white; flex: 1; padding: 0; margin: 0';

  plyPts.setAttribute('style', ptStyle);
  compPts.setAttribute('style', ptStyle);
  
  playerScore.appendChild(para[0]);
  playerScore.appendChild(playerPts);

  computerScore.appendChild(para[1]);
  computerScore.appendChild(compPts);
  scoreHolder.forEach(bg => {bg.style.backgroundColor = "rgb(8, 206, 241)"});
}

//Create game start message box
function gsMessageBox(){
  let message = document.createElement('div');
  message.id = "message";
  let messageTextOne = document.createElement('h1');
  let messageTextTwo = document.createElement('p');
  messageTextOne.setAttribute('style', 'font-size: 2.5vw; font-weight: 900')
  messageTextTwo.setAttribute('style', 'font-size: 1.5vw; font-weigth: 500')
  messageTextOne.style.textShadow = ".3vw .3vw rgb(26, 25, 25)"
  messageTextOne.appendChild(document.createTextNode("Click the icons below to start!"));
  messageTextTwo.appendChild(document.createTextNode("First one to reach a score for 5 wins!"));
  message.appendChild(messageTextOne);
  message.appendChild(messageTextTwo);
  message.setAttribute('style', 'text-align:center');
  messageBox.appendChild(message);
}

const midContent = document.querySelector('div.midcontent-container');
const playerChoice = document.querySelector('.player.choice-box');
const compChoice = document.querySelector('.computer.choice-box');

function createChoiceBox() {
  const playerSelectImgBox = document.createElement('img');
  playerSelectImgBox.id = "playerSelectImg";
  playerSelectImgBox.src = "./Images/rock.png";
  const compSelectImgBox = document.createElement('img');
  compSelectImgBox.id = "compSelectImg";
  compSelectImgBox.src = "./Images/rock.png";
  
  playerChoice.appendChild(playerSelectImgBox);
  compChoice.appendChild(compSelectImgBox);
  midContent.style.backgroundColor = "lightpink";
  midContent.style.marginTop= "2%";
}

function gameUI() {
  toggleRPS();
  createPlayerBox();
  createComputerBox();
  addScoreBrd();
  gsMessageBox();
  createChoiceBox();
  mainNameCont.forEach(cont => cont.setAttribute("style", 'visibility: visible; opacity: 1'));
}

// Create the possible choices a computer can pick and randomly select one of the choices 
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let choice = choices[Math.floor(Math.random()* choices.length)];
  const compSelectImg = document.getElementById('compSelectImg');
  if (choice === "paper"){
    compSelectImg.src = "./Images/paper.png";
  } else if(choice === "scissors"){
    compSelectImg.src = "./Images/scissors.png";
  } else if (choice === "rock") {
    compSelectImg.src = "./Images/rock.png";
  }
 return choice;  
    return choice;
 return choice;  
}

// Gets playerchoice when rps icons is clicked
function getPlayerChoice(e) {
  const playerSelectImg = document.getElementById('playerSelectImg');
  let choice = `${e.target.getAttribute('id')}`
  if (e.target.id === "paper") {
    playerSelectImg.src = "./Images/paper.png";
  } else if (e.target.id === "scissors"){
    playerSelectImg.src = "./Images/scissors.png";
  } else if (e.target.id === "rock"){
    playerSelectImg.src = "./Images/rock.png";
  }
  return choice;
}

const imgButtons = document.querySelectorAll('.image-button img');
imgButtons.forEach(button => button.addEventListener('click', playGame, false));
const result = document.getElementById('result');
result.setAttribute('style', 'font-family: "Luckiest Guy"; font-size:2.5vw; color:palevioletred');

function playGame(e){
  e.stopPropagation();
  e.preventDefault();
  let playerSelection = getPlayerChoice(e);
  let computerSelection = getComputerChoice();
  let topResult = document.getElementById('message').firstChild;
  let bottomResult = document.getElementById('message').lastChild;
  
  if (playerSelection === computerSelection) {
    topResult.textContent = "It's a tie!";
    bottomResult.innerHTML = playerSelection[0].toUpperCase() + playerSelection.slice(1) + ' vs ' + computerSelection[0].toUpperCase() + computerSelection.slice(1);
  } else if (
    playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === "paper") {
    topResult.textContent = "Congrats! You Won!";
    bottomResult.innerHTML = playerSelection[0].toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection[0].toUpperCase() + computerSelection.slice(1);
    playerOne.score++;
    playerPts.innerHTML = playerOne.score;
  } else {
    topResult.textContent =`Sorry! You lose!`;
    bottomResult.innerHTML = playerSelection[0].toUpperCase() + playerSelection.slice(1) + ' loses against ' + computerSelection[0].toUpperCase() + computerSelection.slice(1);
    playerTwo.score++;
    compPts.innerHTML = playerTwo.score;
  }
  
  if(playerPts.innerHTML === "5" || compPts.innerHTML === "5") {
    openDialog.style.visibility = "visible";
    openDialog.style.opacity = "1";;
    if (playerOne.score > playerTwo.score) {
      result.textContent = "You've reach 5. You win!"
    } else {
      result.textContent = "No luck today. You lose!";
    }
  }
}

//Load up game over dialog box
const openDialog = document.getElementById('gameOver');

function toggleGameOverModal(){
  if (openDialog.style.visibility === "hidden") {
    openDialog.style.visibility = "visible";
    openDialog.style.opacity = "1";
  } else {
    openDialog.style.visibility = "hidden";
    openDialog.style.opacity = "0";
  }
}

const playAgain = document.getElementById('yes-button');
const notAgain = document.getElementById('no-button');
const newGame = document.getElementById('new-button')
const closeDialog = document.querySelectorAll('button');

function closeModal(e) {
  let topResult = document.getElementById('message').firstChild;
  let bottomResult = document.getElementById('message').lastChild;
  if (e.target.id === "new-button"){
    location.href = "https://telshira.github.io/rock-paper-scissors/";
  } else if (e.target.id === "yes-button"){
    toggleGameOverModal();
    playerOne.score = 0;
    playerTwo.score = 0;
    playerPts.innerHTML = playerOne.score;
    compPts.innerHTML = playerTwo.score;
    topResult.textContent = "Click the icons below to start!";
    bottomResult.textContent = "First one to reach a score for 5 wins!";
  } else if (e.target.id === "no-button") {
    toggleGameOverModal();
    topResult.innerHTML = `Results: ${playerOne.score} wins vs ${playerTwo.score} losses`;
    topResult.style.fontSize = "2.5vw";
    topResult.style.color = "palevioletred";
    midContent.style.backgroundColor = "rgb(8, 206, 241)";
    bottomResult.textContent = "";
    imgButtons.forEach(button => button.removeEventListener('click', playGame, false));
  }
}

closeDialog.forEach(button => button.addEventListener('click', closeModal));