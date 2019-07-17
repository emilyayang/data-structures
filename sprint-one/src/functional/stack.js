
var Stack = function() {
  var someInstance = {};
  var order = 0;


  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    order++;
    storage[order] = value;
  };

  someInstance.pop = function() {
    var currentOrder = order;
    var stored = storage[currentOrder];
    order--;
    delete storage[currentOrder];
    return stored;
  };

  someInstance.size = function() {
    var keysArray = Object.keys(storage);
    return keysArray.length;
  };

  return someInstance;
};

var stack = new Stack();

/////

// var Stack = function() {
//   var someInstance = {};
//   // Use an object with numeric keys to store values
//   var storage = {};
//   // Implement the methods below
//   someInstance.push = function(value) {
//       storage[someInstance.size()] = value;

//   };

//   someInstance.pop = function() {
//   var stored = storage[someInstance.size()];
//   delete stored;
//   return stored;
//   };

//   someInstance.size = function() {
//     var keysArray = Object.keys(storage);
//     return keysArray.length;
//   };

//   return someInstance;
// };

// var stack = new Stack();
