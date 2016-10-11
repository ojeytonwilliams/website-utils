"use strict"
//process.setMaxListeners(0); // We want to download a bunch of images in parallel, so first
// we have to ask Node to ignore the limit on event listeners.

const fs = require('fs');
const request = require('request');
const zlib = require('zlib');
// const gunzip = zlib.createGunzip(); // This did
// not appear to be able to unzip multiple things at once :(

// gunzip.setMaxListeners(0);

var baseUri = "https://assets-counterplaygames.netdna-ssl.com/production/resources/";//icons/artifact_f4_hornofforsaken.png

var cards = JSON.parse(fs.readFileSync("./data/parsed-cards.json")); // Yeah, it's synced,
// but this is intended to be used as a stand-alone script.  Shouldn't matter.



for(var i in cards){
  download(cards[i].spriteURL);
}

function download(url) {
  var location = url.slice(68); // There are 68 chars in the domain name.
  var gunzip = zlib.createGunzip(); // Hopefully, by spawning separate unzippers
  // for each download, this should not run into concurrency issues.
  request.get(baseUri + location)
    .on('error', function(err) {
      console.log(err)
    })
    .pipe(gunzip)
    .pipe(fs.createWriteStream(location));
}
