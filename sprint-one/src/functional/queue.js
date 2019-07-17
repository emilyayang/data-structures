var Queue = function() {
  var someInstance = {};
  var order = 0;
  var queueOrder = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    order++;
    storage[order] = value;
  };

  someInstance.dequeue = function() {
    queueOrder++;
    var stored = storage[queueOrder];
    delete storage[queueOrder];
    return stored;
  };

  someInstance.size = function() {
    var keysArray = Object.keys(storage);
    return keysArray.length;
  };

  return someInstance;
};

var stack = new Stack();
