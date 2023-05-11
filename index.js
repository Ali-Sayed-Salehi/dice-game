

randomNumber1 = Math.floor((Math.random() * 6)) + 1;
randomNumber2 = Math.floor((Math.random() * 6)) + 1;

const dice1img = document.querySelector('.img1');
const dice2img = document.querySelector('.img2');

dice1img.setAttribute("src", `images/dice${randomNumber1}.png`);
dice2img.setAttribute("src", `images/dice${randomNumber2}.png`);

const titleMessage= document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
  titleMessage.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  titleMessage.textContent = "Player 2 Wins!";
} else {
  titleMessage.textContent = "Draw!";
}

document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload();
});

