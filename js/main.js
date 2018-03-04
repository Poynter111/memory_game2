//var cards = ["Queen", "Queen", "King", "King"];
/*
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a Match");
} else {
	alert("Sorry, try again")};
};

var flipcard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
createBoard(); */
//----------------------------------------------
console.log("Up and running!");
var cards = [
   {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },
];
var cardsInPlay = [];
 function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
      } else {
          alert("Sorry, try again");
        };
  };
// Function to flip the cards and retreving the correct image for cards from object
function flipCard() {
    var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
 this.setAttribute('src', cards[cardId].cardImage);
 if (cardsInPlay.length === 2){
    checkForMatch();
 };
};
//Function to create the game board in HTML
console.log(cardsInPlay);
 function createBoard() {
  const cardTable = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardTable.appendChild(cardElement);
  }
};

createBoard();
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

//var cardTwo = cards[1];
//cardsInPlay.push(cardTwo);
//var cardOne = cards[0];
//cardsInPlay.push(cardOne);

//if (temp > 70) {
//console.log("It is hot outside!");
//} else if (temp > 50) {
//console.log("It is warm outside.");
//} else {
//console.log("Brr! It's freezing out there!");
//}
//if (condition) {
//    if (condition) {
//        // some code
//    } else {
//        // some code
//    }
//}





