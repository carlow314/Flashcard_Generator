module.exports = BasicCard;

function BasicCard(front, back){
  this.front = front;
  this.back = back;
  this.printInfo = function(){
    console.log(this.front);
    console.log(this.back);
  };
}
