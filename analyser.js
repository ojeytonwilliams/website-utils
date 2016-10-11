"use strict";

var fs = require('fs');

var collectionJSON = fs.readFileSync("collection.json");
// parse the collection and remove any Tutorial Teacher cards
var collection = JSON.parse(collectionJSON).filter(x => x["factionName"] != "Tutorial Teacher");
var argeon = collection.filter(x => x["name"] == "Argeon Highmayne");
var brawlers = collection.filter(x => x["name"] == "Lysian Brawler");
var silverguards = collection.filter(x => x["name"] == "Silverguard Knight");


// check the two silverguards to see how they differ
function checkSilverguards() {
  for (var key in silverguards[0]) {
    if (silverguards[0][key] != silverguards[1][key]) {
      console.log(key);
      console.log(silverguards[0][key]);
      console.log(silverguards[1][key]);

    }
  }
}

// There are four Argeons: two are the basic version and its prismatic variant and the other two are the two versions of the Mk II
// general.
function checkArgeon() {
  for (var key in argeon[0]) {
    if (argeon[0][key] != argeon[1][key]) {
      console.log("Key: " + key);
      for(var i in argeon){
        console.log(argeon[i][key]);
      }
    }
  }
}

//checkArgeon();
console.log(argeon[2])