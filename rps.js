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
    messageBox.remove();
    loadRPS();
    createPlayerBox();
    createComputerBox();
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
}