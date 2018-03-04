//var cards = ["Queen", "Queen", "King", "King"];
var cards = [
   {
       rank: "Queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "Queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },
   {
    rank: "King",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
   {
    rank: "King",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },
];
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
cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2) {
	checkForMatch();
};
};



flipcard(2);
flipcard(3);





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