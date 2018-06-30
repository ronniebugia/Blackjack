const deck = require('./libraries/decklib.js');

var Deck = new deck();
var myCards = [];
var myScore = 0;

console.log('Generating deck');
Deck.generate_deck();
Deck.shuffle();

console.log('Dealing cards...');
myCards.push(Deck.deal());
myCards.push(Deck.deal());
console.log('You have ' + myCards[0].name + ' and ' + myCards[1].name);


console.log("Hit? y or n");
var hit = readline().toLowerCase();

while(hit == 'y'){
  myCards.push(Deck.deal());
  hit = prompt("Hit again?");
}
