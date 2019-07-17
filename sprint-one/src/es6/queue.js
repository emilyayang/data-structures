class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	constructor() {
	  this.storage = {};
	  this.order = 0;
	  this.queueOrder = 0;
	}
	enqueue(value) {
	  this.order++;
	  this.storage[this.order] = value;
	};

	dequeue() {
	  this.queueOrder++;
	  var stored = this.storage[this.queueOrder];
	  delete this.storage[this.queueOrder];
	  return stored;
	};

	size() {
	  var keysArray = Object.keys(this.storage);
	  return keysArray.length;
	};
}

var MyQueue = new Queue();