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
    for (let i = 0; i < array.length ;i++){
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      }
      userName = array.join(" ");
  }
  playerOne.username = userName;
}

//load welcome screen once we submit name
function loadIntro(e) {
  e.preventDefault();
  if (!playerOne.username){ 
    getName();
    if (playerOne.username.length > 13){
      playerOne.username = playerOne.username.slice(0, 13);
    }
  } else{
    // removes inputs once name is received
    inputs.forEach((input) => {
        input.remove();
      });
    createWelcomeBox();
  }
}

function createWelcomeBox(){
  let welcomeContainer = document.createElement('div');
  let welcomeIntro = document.createElement('h1');
  let welcomeName = document.createElement('h3');
  let welcomeText = document.createElement('p');
  let startBtn = document.createElement('button');
  startBtn.classList = 'start-button';
  startBtn.style.backgroundColor = 'darkgray';
  startBtn.style.color = 'white';
  welcomeContainer.className = 'welcome-container';
  welcomeName.textContent = `${playerOne.username}`;
  welcomeIntro.append(welcomeName);
  welcomeIntro.textContent = `Hi ${welcomeName.textContent}. Are you ready to play?`
  welcomeText.textContent = `Click the start button to begin.`
  welcomeText.appendChild(startBtn);
  welcomeContainer.appendChild(welcomeIntro);
  welcomeContainer.appendChild(welcomeText);
  messageBox.appendChild(welcomeContainer);
}

