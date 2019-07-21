// var BinarySearchTree = function(value) {
//   this.value = value;
//   this.left = null;  
//   this.right = null; 

// };

// var binaryTreeMethods = {};

// // A .insert() method, which accepts a value and places it in the tree in the correct position.
// BinarySearchTree.prototype.insert = function(value) {
//   var bTree = new BinarySearchTree(value);
//   if (value > this.value) {
//     this.right = bTree;
//   } else {
//   	this.left = bTree;
//   }
// }

// // A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// BinarySearchTree.prototype.contains = function(target) {
  
// }

//  // A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
// BinarySearchTree.prototype.depthFirstLog = function(cb) {

// }


// var bTree = new BinarySearchTree();


// A .left property, a binary search tree (BST) where all values are lower than the current value.
// A .right property, a BST where all values are higher than the current value.
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;  
  binarySearchTree.right = null; 

  extend(binarySearchTree, binaryTreeMethods);
  return binarySearchTree;
};

var binaryTreeMethods = {};

// A .insert() method, which accepts a value and places it in the tree in the correct position.
binaryTreeMethods.insert = function(value) {
  var recursive = function(node) {
	  if (value > node.value) {
	  	if (node.right === null) {
	  		node.right = BinarySearchTree(value);
	  	} else {
	      return recursive(node.right);
	    }
	  } 
	  else if (value < node.value) {
	    if (node.left === null) {
	      node.left = BinarySearchTree(value);
	  	} else {
	      return recursive(node.left);
	    }
	  }
	}
  recursive(this);
}

// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
binaryTreeMethods.contains = function(target) {
  var output = false;
  var findTarget = function(node) {
  	if (target !== node.value) {
	  if (target > node.value && node.right !== null) {
        return findTarget(node.right);
      } 
      else if (target < node.value && node.left !== null) {
        return findTarget(node.left);
      } 
  	} else {
  		output = true;
  	}
  }
  findTarget(this);
  return output;
}

 // A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
binaryTreeMethods.depthFirstLog = function(cb) {
  var callback = function(node) {
  	cb(node.value);
  	if (node.left) {
  		callback(node.left)
  	}
  	if (node.right) {
  		callback(node.right)
  	}
  }
  callback(this);
}

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var binarySearchTree = new BinarySearchTree();


// A .left property, a binary search tree (BST) where all values are lower than the current value.
// A .right property, a BST where all values are higher than the current value.
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.

/*
 * Complexity: What is the time complexity of the above functions? log n 
 */

