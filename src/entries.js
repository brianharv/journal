export function Entries(title, body) {
  this.title = title,
  this.body = body,
  this.vowelCount = 0;
  this.consCount = 0;
  this.wordCount = 0;
}

Entries.prototype.checkTitle = function() {
  return "I can't answer that yet!";
}