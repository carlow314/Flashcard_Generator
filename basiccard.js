module.exports = BasicCard;

function BasicCard(front, back){
  this.front = front;
  this.back = back;
}

var test = new BasicCard ("Who won the NBA Champioship this year" , "The Golden State Warriors");
console.log(test);
