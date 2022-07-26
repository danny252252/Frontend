var getRandomNum1 = Math.floor(Math.random() * 6 + 1);
var getRandomNum2 = Math.floor(Math.random() * 6 + 1);

if (getRandomNum1 === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}else if(getRandomNum1 === 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}else if(getRandomNum1 === 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}else if(getRandomNum1 === 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}else if(getRandomNum1 === 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}else if(getRandomNum1 === 6){
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

if (getRandomNum2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }else if(getRandomNum2 === 2){
      document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }else if(getRandomNum2 === 3){
      document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }else if(getRandomNum2 === 4){
      document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }else if(getRandomNum2 === 5){
      document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }else if(getRandomNum2 === 6){
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }

  if(getRandomNum1 > getRandomNum2){
    document.querySelector("h1").innerHTML = "Player one win!!!"
  }else if(getRandomNum1 < getRandomNum2){
    document.querySelector("h1").innerHTML = "Player two win!!!"
  }else if(getRandomNum1 === getRandomNum2){
    document.querySelector("h1").innerHTML = "Draw"
  }

console.log(getRandomNum1);
console.log(getRandomNum2);
