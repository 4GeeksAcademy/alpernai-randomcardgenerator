import "./style.css";

window.onload = () => {
  let randomNumber = generateRandomNumber();
  let randomSuit = generateRandomSuit();

  document.querySelector(".number").innerHTML = randomNumber;
  document.querySelector("#top-suit").innerHTML = randomSuit;
  document.querySelector("#bottom-suit").innerHTML = randomSuit;

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector("#top-suit").classList.add("red");
    document.querySelector("#bottom-suit").classList.add("red");
  }
};

function generateRandomNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
}

function generateRandomSuit() {
  let suits = ["♣", "♠", "♦", "♥"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
}
