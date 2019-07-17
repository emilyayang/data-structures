var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.order = 0;

};


Stack.prototype.push = function(value) {
  this.order++;
  this.storage[this.order] = value;
};

Stack.prototype.pop = function() {
  var currentOrder = this.order;
  var stored = this.storage[currentOrder];
  this.order--;
  delete this.storage[currentOrder];
  return stored;
};

Stack.prototype.size = function() {
  var keysArray = Object.keys(this.storage);
  return keysArray.length;
};
