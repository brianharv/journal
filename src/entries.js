export default function Entry(title, body) {
  this.title = title,
  this.body = body,
  this.vowelCount = 0,
  this.consCount = 0,
  this.wordCount = 0
}

Entry.prototype.checkTitle = function() {
  return "I can't answer that yet!";
};

/*
Entry.prototype.countVowels = function() {
let vowelList= 'aeiouAEIOU';
let vcount = 0;
for (let i= 0; i < newArray.length ; i++) {
  if (vowelList.indexOf(newArray[i]) !== -1) {
    vcount += 1;
  }
}
return vcount
Entry.prototype.countWords = function(body) {
  let text = body.split(" ");
  let newArray = [];
  text.forEach(function(element) {
    newArray.push(element);
  });
  console.log([newArray.length -1]);

*/ 

