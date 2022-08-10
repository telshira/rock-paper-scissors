const submit = document.querySelector('input[type="submit"]');
const inputs = document.querySelectorAll('input');
const nameInput = document.querySelector(`input[type='text']`);
const messageBox = document.getElementById('message-box');

const playerOne = {username: '', score: 0};
const playerTwo = {username: 'Computer', score: 0};

submit.addEventListener('click', loadIntro);

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

//load welcome screen once we submit name
function loadIntro(e) {
  e.preventDefault();
  if (!playerOne.username){ 
    getName();
  } else{
    // removes inputs once name is received
    inputs.forEach((input) => {
        input.remove();
      });
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
    loadRPS();
    createPlayerBox();
    createComputerBox();
    addScoreBrd();
    gsMessageBox();
  };
}

function loadRPS(){
  let buttonImages = document.querySelectorAll('div.image-button');
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
  
  scoreHolder.forEach(bg => {bg.style.backgroundColor = "rgb(8, 206, 241)";});
}

//Create game start message box
function gsMessageBox(){
  let message = document.createElement('div');
  let messageTextOne = document.createElement('h1');
  let messageTextTwo = document.createElement('p');
  messageTextOne.appendChild(document.createTextNode("Click the icons below to start!"));
  messageTextTwo.appendChild(document.createTextNode("First one to reach a score for 5 wins!"));
  message.appendChild(messageTextOne);
  message.appendChild(messageTextTwo);
  message.setAttribute('style', 'text-align:center');
  messageBox.appendChild(message);
  console.log(messageBox);
}

