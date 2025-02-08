var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var query = document.querySelectorAll("img");
console.log(query);
query[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
query[1].setAttribute("src", `./images/dice${randomNumber2}.png`);
if (randomNumber1 > randomNumber2) {
  console.log("Player 1 won");
  document.querySelector("h1").innerHTML = "<h1>Player 1 won</h1>";
} else if (randomNumber1 == randomNumber2) {
  console.log("Match is draw");
  document.querySelector("h1").innerHTML = "<h1>Match is Draw</h1>";
} else {
  console.log("Player 2 won");
  document.querySelector("h1").innerHTML = "<h1>Player 2 won</h1>";
}
