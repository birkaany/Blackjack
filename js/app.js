const btnHit = document.querySelector("#btnHit");
const wallet = document.querySelector("#wallet");
const openedCards = document.querySelector("#openedCards");
const bet = document.querySelector("#bet");
const cardsTotal = document.querySelector("#cardsTotal");

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
};

newGame();

pickNextCard = () => {
  if (budget >= betAmount) {
    nextCard = getRandomNumber(13);
    sumCards += nextCard;
    openedCards.textContent += ` - ${nextCard}`;
    cardsTotal.textContent = sumCards;

    if (sumCards < 21) {
    } else if (sumCards == 21) {
      console.log(`"Won!"`);
      budget += betAmount;
      wallet.textContent = `$${budget}`;
    } else {
      console.log(`Total: ${sumCards} | You lost`);
      isRoundOver = true;
      budget -= betAmount;
      wallet.textContent = `$${budget}`;
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
