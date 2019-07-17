class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	constructor() {
	  this.storage = {};
	  this.order = 0;

	}
	push(value) {
	  this.order++;
	  this.storage[this.order] = value;
	};

	pop() {
	  var currentOrder = this.order;
	  var stored = this.storage[currentOrder];
	  this.order--;
	  delete this.storage[currentOrder];
	  return stored;
	};

	size() {
	  var keysArray = Object.keys(this.storage);
	  return keysArray.length;
	};
}


var MyStack = new Stack();