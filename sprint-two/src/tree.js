var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me an array containing a number of subtrees

  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {
//takes any value, sets that as the target of a node, and adds that node as a child of the tree
  var child = Tree(value); 
  this.children.push(child);
};

treeMethods.contains = function(target) {
	var output = false;
    //takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
    var findTarget = function(node) {

        for (var i = 0; i < node.length; i++) { 
       	    if (node[i].value === target) { //to access all possible values on the the same level
                output = true;
            } else {
                // for (var j = 0; j < node[i].children.length; j++) { //iterate through children [] to access {}
                    findTarget(node[i].children); //dont need another for loop because we are entering this.children[i].children deeper. children is not on a similar level 
            }
        }
    }
    // console.log(this.children[0].value) //5
    findTarget(this.children);
    return output;

}

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var tree = new Tree();


/*
 * Complexity: What is the time complexity of the above functions?
 */
// A tree class, in functional with shared methods style, with the following properties:
//  .children property, 
//  .addChild() method, 
//  A .contains() method, 
//  What is the time complexity of the above functions? linear


