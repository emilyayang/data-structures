var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.order = 0;
  this.queueOrder = 0;

};

Queue.prototype.enqueue = function(value) {
  this.order++;
  this.storage[this.order] = value;
};

Queue.prototype.dequeue = function() {
  this.queueOrder++;
  var stored = this.storage[this.queueOrder];
  delete this.storage[this.queueOrder];
  return stored;
};

Queue.prototype.size = function() {
  var keysArray = Object.keys(this.storage);
  return keysArray.length;
};


