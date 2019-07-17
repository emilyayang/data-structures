var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = { 
  	"storage": {},
    "order": 0,
    "queueOrder": 0
  }
  extend(someInstance, queueMethods);
  return someInstance;

};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.order++;
  this.storage[this.order] = value;
};

queueMethods.dequeue = function() {
  this.queueOrder++;
  var stored = this.storage[this.queueOrder];
  delete this.storage[this.queueOrder];
  return stored;
};

queueMethods.size = function() {
  var keysArray = Object.keys(this.storage);
  return keysArray.length;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};