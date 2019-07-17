var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = { 
  	"storage": {},
    "order": 0
  }
  extend(someInstance, stackMethods);
  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.order++;
  this.storage[this.order] = value;
};

stackMethods.pop = function() {
  var currentOrder = this.order;
  var stored = this.storage[currentOrder];
  this.order--;
  delete this.storage[currentOrder];
  return stored;
};

stackMethods.size = function() {
  var keysArray = Object.keys(this.storage);
  return keysArray.length;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};