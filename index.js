

randomNumber1 = Math.floor((Math.random() * 6)) + 1;

const dice1img = document.querySelector('.img1');
dice1img.setAttribute("src", `images/dice${randomNumber1}.png`);

console.log(dice1img);