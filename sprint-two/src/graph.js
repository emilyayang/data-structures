

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
    if (this.storage[eachNode][node]) { //if the edge exists
      delete this.storage[eachNode][node]; //delete edge!!!!!
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
 * Complexity: What is the time complexity of the above functions? constant
 */



