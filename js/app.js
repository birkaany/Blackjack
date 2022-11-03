const btnHit = document.querySelector("#btnHit");
const wallet = document.querySelector("#wallet");
const openedCards = document.querySelector("#openedCards");
const bet = document.querySelector("#bet");
const cardsTotal = document.querySelector("#cardsTotal");
let cardsBlock = document.getElementById("cards");
const message = document.getElementById("message");

let playerName = (document.querySelector("#playerName").textContent = window.prompt("Your name"));
let budget = Number(window.prompt("How much money in your wallet?"));

let isGameOver = false;
let isRoundOver = false;
let betAmount = budget / 10;
let sumCards;
let firstCards;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

newGame = () => {
  firstCards = [getRandomNumber(5), getRandomNumber(5)];
  sumCards = firstCards[0] + firstCards[1];
  openedCards.textContent = `${firstCards[0]} - ${firstCards[1]}`;
  wallet.textContent = `$${budget}`;
  bet.textContent = `$${betAmount}`;
  cardsTotal.textContent = sumCards;
  message.textContent = "";
  firstCards.forEach((cards) => {
    var div = document.createElement("div");
    div.setAttribute("class", "flip-card");
    div.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="./images/card-back.png" />
        </div>
        <div class="flip-card-back">
          <img src="./images/card${cards}.png" />
        </div>
      </div>`;
    cardsBlock.appendChild(div);
  });
};

newGame();

cleanCards = () => {
  let activeCards = document.querySelectorAll(".flip-card");
  activeCards.forEach((activeCards) => {
    activeCards.remove();
  });
};

showNextCard = (cardNumber) => {
  var div = document.createElement("div");
  div.setAttribute("class", "flip-card");
  div.innerHTML = `
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./images/card-back.png" />
    </div>
    <div class="flip-card-back">
      <img src="./images/card${cardNumber}.png" />
    </div>
  </div>`;
  cardsBlock.appendChild(div);
};

pickNextCard = () => {
  if (budget >= betAmount) {
    nextCard = getRandomNumber(13);
    sumCards += nextCard;
    openedCards.textContent += ` - ${nextCard}`;
    cardsTotal.textContent = sumCards;

    if (sumCards < 21) {
      showNextCard(nextCard);
    } else if (sumCards == 21) {
      budget += betAmount;
      wallet.textContent = `$${budget}`;
      isRoundOver = true;
      cleanCards();
      message.textContent = `You won $${betAmount}`;
    } else {
      isRoundOver = true;
      budget -= betAmount;
      wallet.textContent = `$${budget}`;
      cleanCards();
      message.textContent = `You lost $${betAmount}`;
    }
  } else {
    isGameOver = true;
    isRoundOver = true;
  }
};

btnHit.addEventListener("click", () => {
  if (!isRoundOver && !isGameOver) {
    pickNextCard();
  } else if (isRoundOver && !isGameOver) {
    sumCards = 0;
    isRoundOver = false;
    isGameOver = false;
    newGame();
  } else {
    console.log("You're out of money");
  }
});
