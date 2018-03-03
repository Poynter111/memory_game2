
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a Match");
} else {
	alert("Sorry, try again");
};
};







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