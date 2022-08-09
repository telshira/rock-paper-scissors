let submit = document.querySelector('input[type="submit"]');
let inputs = document.querySelectorAll('input');
let nameInput = document.querySelector(`input[type='text']`);
let playerName = document.getElementById('player-name');
let playerNameContainer = document.getElementById('player-container')
let messageBox = document.getElementById('message-box');

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


messageBox.addEventListener('click', createGameUI);

function createGameUI(e){
  //looks for start button in messagebox
  if (e.target.classList.contains('start-button')){
    messageBox.remove();
    loadRPS();
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
  
}