var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var storedValue = list.head.value;
    list.head = list.head.next;
    return storedValue;
  };

  list.contains = function(target) {

    var findTarget = function(node) {
      // return node.next !== null && node.value === target ? true : node === list.tail ? false : findTarget(node.next);
      if (node.next !== null) { 
        if (node.value === target) {
          return true;
        } else {
          return findTarget(node.next);
        }
      } else if (node === list.tail) {
        if (node.value === target) {
          return true;
        } else {
          return false;
        }
      }
    };
    return findTarget(list.head)
  };

  return list;
};  

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var linkedList = new LinkedList();

/*
 * Complexity: What is the time complexity of the above functions? constant
 */
// A linkedList class, in functional style, with the following properties:
//  .head property, a linkedListNode instance
//  .tail property, a linkedListNode instance
//  .addToTail() method, takes a value and adds it to the end of the list
//  .removeHead() method, removes the first node from the list and returns its value
//  .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
//  What is the time complexity of the above functions?



