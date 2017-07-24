module.exports = ClozeCard;

function ClozeCard(text, cloze,error){
  this.text = text;
  this.cloze = cloze;
  this.partial = text.replace(this.cloze, "____________");
  this.printInfo = function(){
    console.log(this.text);
    console.log(this.cloze);
    console.log(this.partial);
  };
}
