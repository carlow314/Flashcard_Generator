//var ClozeCard = require("./clozecard.js");
var BasicCard = require("./basiccard.js");

var BasicCards = new BasicCard (process.argv[2],process.argv[3]);
console.log(BasicCards.front);
console.log(BasicCards.back);
