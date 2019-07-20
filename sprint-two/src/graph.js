

// Instantiate a new graph
var Graph = function() {
  this.storage = {}
};

// graph.addNode(1);
// expect(graph.contains(1)).to.equal(true);
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    if (this.storage[node]) {
      return true;
    } else {
      return false;
    }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var eachNode in this.storage) {
    if (this.storage[eachNode][node]) { //if 
      delete this.storage[eachNode][node];
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode][toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //loop through each node
  //pass cb on each value of each node
  for (var eachNode in this.storage) {
    cb(eachNode);
  }
};

var graph = new Graph();


/*
 * Complexity: What is the time complexity of the above functions?
 */

 // A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
 // A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
 // An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
 // A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
 // A .removeEdge() method that removes the connection between two nodes
 // A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
 // What is the time complexity of the above functions?






// // Instantiate a new graph
// var Graph = function() {
//   this.storage = {}
// };

// // graph.addNode(1);
// // expect(graph.contains(1)).to.equal(true);
// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   this.storage[node] = {};
// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//     if (this.storage[node]) {
//       return true;
//     } else {
//       return false;
//     }
// };

// // Removes a node from the graph.//obj //nested obj//key
// Graph.prototype.removeNode = function(node) {

//   delete this.storage[node];
// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {
//   // for (var nodes in this.storage) {
//     if (this.storage[fromNode].toNode === toNode && this.storage[toNode].fromNode === fromNode) {
//       return true;
//     } else {
//       return false;
//   }
// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   this.storage[fromNode].toNode = toNode;
//   this.storage[toNode].fromNode = fromNode

// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
//   this.storage[fromNode] = fromNode;
//   this.storage[toNode] = toNode
// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
//   //loop through each node
//   //pass cb on each value of each node
//   for (var eachNode in this.storage) {
//     var value = eachNode.value;
//     eachNode.value = cb(value);
//   }
// };

// var graph = new Graph();

// graph.addNode(4);
// graph.addNode(5);
// graph.addEdge(5, 4);

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
 // A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
 // An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
 // A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
 // A .removeEdge() method that removes the connection between two nodes
 // A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
 // What is the time complexity of the above functions?








// // Instantiate a new graph
// var Graph = function() {
// };

// var Node = function(node) {
//   this.value = node;
//   this.pointsTo = {};
// }

// // graph.addNode(1);
// // expect(graph.contains(1)).to.equal(true);
// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   this[node] = new Node(node);
// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//     if (this[node]) {
//       return true;
//     } else {
//       return false;
//     }
// };

// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
//   var nodePointsTo = this[node].pointsTo
//   for (var key in nodePointsTo) {
//     if (this[nodePointsTo[key]].pointsTo[node] !== undefined) {
//       delete this[[key]].pointsTo[node]
//     }
//   }
//   delete this[node];
// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {
//   var fromNodeValue = fromNode.value;
//   var toNodeValue = toNode.value;
//   if (this[fromNode].pointsTo[toNodeValue] === toNode || this[toNode].pointsTo[fromNodeValue] === fromNode) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   var fromNodeValue = fromNode.value;
//   var toNodeValue = toNode.value;
//   this[fromNode].pointsTo[toNodeValue] = toNode;
//   this[toNode].pointsTo[fromNodeValue] = fromNode;
// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
//   var fromNodeValue = fromNode.value;
//   var toNodeValue = toNode.value;
//   console.log(this[fromNode].pointsTo[toNodeValue])
//   delete this[fromNode].pointsTo[toNodeValue];
//   delete this[toNode].pointsTo[fromNodeValue];
// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
//   //loop through each node
//   //pass cb on each value of each node
//   for (var eachNode in this) {
//     var value = eachNode.value;
//     eachNode.value = cb(value);
//   }
// };

// var graph = new Graph();

// graph.addNode(4);
// graph.addNode(5);
// graph.addEdge(5, 4);

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

//  // A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
//  // A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
//  // An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
//  // A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
//  // A .removeEdge() method that removes the connection between two nodes
//  // A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
//  // What is the time complexity of the above functions?







