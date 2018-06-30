var deck = [];

function generate_deck(){
    let card = (suit, value, score) => {
      this.name = value + ' of ' + suit;
      this.suit = suit;
      this.value = value;
      this.score = score;

      return {name:this.name, suit:this.suit, value:this.value, score:this.score}
    }

    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
    let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
    

    for(let s=0; s < suits.length; s++){
      for(let v=0; v < values.length; v++){
        deck.push(card(suits[s], values[v], score[v]));
      }
    }
}
    
function deal(){
      let dealt_card = deck.shift();
      dealt_cards.push(dealt_card);
      return dealt_card;
}
    
function shuffle(){
     let j, x, i;
     for (i = deck.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         x = deck[i];
         deck[i] = deck[j];
         deck[j] = x;
     }
}
    
function clear_deck(){
  deck = [];
}