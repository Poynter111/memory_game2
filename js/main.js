
var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a Match");
} else {
	alert("Sorry, try again");};
};

var flipcard = function (cardId) {

cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length === 2) {
	checkForMatch();
};
console.log("User flipped " + cards[cardId]);

};



flipcard(3);
flipcard(0);





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