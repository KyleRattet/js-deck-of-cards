
//getting(deals) cards from id 'cards'
var showCards = document.getElementById("cards");

//button to run on click, displays new deck
showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
  //check if reset button exists
  if (document.getElementById("clearCards") == null) {
    createReset();
  }
};

function createReset(){
  var reset = document.createElement('button');
  reset.innerHTML = 'Reset!';
  reset.setAttribute("id", "clearCards");
  reset.onclick = function() {
    document.getElementById('container').innerHTML = "";
    reset.parentNode.removeChild(reset);
  }
  document.body.appendChild(reset);
}

//function that is run when deal is clicked, function
function displayCards(){
  //makes new deck via newDeck function
  var deck = newDeck();
  ///new shuffled cards
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}

// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

  //finish the deck need to create the deck using both the ranks and the suits
  //for loops
  //for each rank
  for(var i=0; i < suits.length; i++) {
    //for each rank
    for(var j=0; j< ranks.length; j++) {
      deck.push({suit: suits[i], card: ranks[j].card});
    }
  }
  return deck;

}

// Shuffles the Deck
function shuffleCards(deck){
  var result = [];
  var deckCopy = deck.slice(0);
 deckLength = deckCopy.length;
 for (var i = 0; i < deckLength; i++) {
   var num = Math.floor(Math.random() * deckCopy.length);
   result.push(deckCopy.splice(num, 1)[0]);
 }
 return result;

}
