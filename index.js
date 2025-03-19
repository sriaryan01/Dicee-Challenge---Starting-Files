// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
// var randomDice="dice" + randomNumber1 + ".png";
// var randomImage="images/" + randomDice;
// var image1=document.querySelector("img");
// image1.setAttribute("src", randomImage);




// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
// var randomDice="dice" + randomNumber2 + ".png";
// var randomImage="images/" + randomDice;
// var image2=document.querySelector("img");
// image2[1].setAttribute("src", randomImage);




var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomImage1 = "images/" + randomDice1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImage2 = "images/" + randomDice2;

var images = document.querySelectorAll("img"); // Selects all <img> elements

images[0].setAttribute("src", randomImage1); // First dice
images[1].setAttribute("src", randomImage2); // Second dice

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" Player 1 Wins 👀"
}
else if(randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML=" Player 2 Wins 👀"
        
    }

else if(randomNumber1=randomNumber2)
    {
        document.querySelector("h1").innerHTML="Draw 😳 "
    }
