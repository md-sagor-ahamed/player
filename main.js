const pOne = document.querySelector(".first-player");
const pTwo = document.querySelector(".second-player");
const pTarget = document.querySelector(".target-label");
const form = document.querySelector(".form");
const pInput = document.querySelector(".player-input");
const pOneButton = document.querySelector(".player-one");
const pTwoButton = document.querySelector(".player-two");
const pReset = document.querySelector(".reset");
let scoreVal = 10;
let playerOne = 0;
let playerTwo = 0;
let turn = "player1";


function init(){
  pOne.textContent = playerOne;
  pTwo.textContent = playerTwo;
  pTarget.textContent = scoreVal;
}
init();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = +pInput.value;
  if(val === '' || val < 1){
    if(!document.querySelector(".alert")){
      pInput.value = '';
      form.insertAdjacentHTML("beforebegin", '<p class="alert">Please input valid number</p>');
      setTimeout(alert,3000)
    }
  }else{
    if(document.querySelector(".alert")){
      alert();
    }
    scoreVal = val;
    pTarget.textContent = val;
    pInput.value = '';
    initialValue();
  }
});

function alert(){
  return document.querySelector(".alert").remove();
}


pOneButton.addEventListener("click", () => {
    if(turn === "player1"){
      playerOne++;
      pOne.textContent = playerOne;
      turn = "player2"
      pOneButton.setAttribute("disabled", "disabled");
      pTwoButton.removeAttribute("disabled");
      getWiner(playerOne, "1");
  }
});

pTwoButton.addEventListener("click", () => {
    if(turn === "player2"){
      playerTwo++;
      pTwo.textContent = playerTwo;
      turn = "player1";
      pTwoButton.setAttribute("disabled", "disabled");
      pOneButton.removeAttribute("disabled");
      getWiner(playerTwo, "2");
  }
});



function getWiner(winer,number){
  if(scoreVal === winer){
    pOneButton.setAttribute("disabled", "disabled");
    pTwoButton.setAttribute("disabled", "disabled");
    form.insertAdjacentHTML("beforebegin", `<p class="winner">Hooray! Player ${number} is winner.</p>`);
    setTimeout(winner, 3000);
  }
}

function winner(){
  return document.querySelector(".winner").remove();
}


pReset.addEventListener("click", () => {
  scoreVal = 10;
  pTarget.textContent = scoreVal;
  initialValue();
})

function initialValue(){
  playerOne = 0;
  playerTwo = 0;
  turn = "player1";
  pOne.textContent = playerOne;
  pTwo.textContent = playerTwo;
  pOneButton.removeAttribute("disabled");
  pTwoButton.removeAttribute("disabled");
  winner();
  alert();
}

