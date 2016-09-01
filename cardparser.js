"use strict";

var cards = require('./cards').cards;
var simplifiedCards = {};
for(var key in cards){
  var card = cards[key];
  simplifiedCards[key] = {name: card.name, type: card.type, cost: card.cost};
}


var fs = require('fs');
var filename = "./cardtest.js"
fs.writeFileSync(filename, "var cards = ");
var output = JSON.stringify(simplifiedCards);
fs.appendFileSync(filename, output + "\n");
fs.appendFileSync(filename, "exports.cards = cards;");

/*fs.writeFile('cardtest.js', simplifiedCards.toString(),  function (err) {
  if (err) return console.log(err);
  console.log('cards > cardtest.js');
});*/

/*fs.writeFile('simplifiedcards.json', JSON.stringify(simplifiedCards), function (err) {
  if (err) return console.log(err);
  console.log('cards > simplifiedcards.json');
});*/