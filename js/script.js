var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6) + 1);

var my = document.getElementsByTagName("img");

my[1].setAttribute("src", "imgs/dice6.png");

switch(randomNumber1){
    case 1:my[0].setAttribute("src", "imgs/dice1.png");break;
    case 2:my[0].setAttribute("src", "imgs/dice2.png");break;
    case 3:my[0].setAttribute("src", "imgs/dice3.png");break;
    case 4:my[0].setAttribute("src", "imgs/dice4.png");break;
    case 5:my[0].setAttribute("src", "imgs/dice5.png");break;
    case 6:my[0].setAttribute("src", "imgs/dice6.png");break;
}

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6) + 1);

switch(randomNumber2){
    case 1:my[1].setAttribute("src", "imgs/dice1.png");break;
    case 2:my[1].setAttribute("src", "imgs/dice2.png");break;
    case 3:my[1].setAttribute("src", "imgs/dice3.png");break;
    case 4:my[1].setAttribute("src", "imgs/dice4.png");break;
    case 5:my[1].setAttribute("src", "imgs/dice5.png");break;
    case 6:my[1].setAttribute("src", "imgs/dice6.png");break;
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}