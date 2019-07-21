// getIndexBelowMaxForKey()
// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`

var HashTable = function() {
  this._limit = 8;
  this._numOfTuples = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  if (this._numOfTuples/this._limit >= 0.75) {
    this._limit = this._limit*2;
  } 

 
  var index = getIndexBelowMaxForKey(k, this._limit); //var getIndexBelowMaxForKey = function(str, max) {
  if (this._storage[index] !== undefined) {
	  for (var i = 0; i < this._storage[index].length; i++) { 
	  	if (this._storage[index][i][0] !== k) {
	      this._storage[index].push([k, v]);
	      this._numOfTuples++;
	    } else {
	      this._storage[index].splice(i, 1); //if the index is already defined we want overwrite values that have same key
	      this._storage[index].push([k, v]);
	    } 
	  } 
  } else {
    this._storage[index] = [[k, v]]; //for first k, v pair put in 
    this._numOfTuples++;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
  	if (this._storage[index][i][0] === k) {
  		return this._storage[index][i][1]
  	}
  }
};

HashTable.prototype.remove = function(k) {
  if (this._numOfTuples/this._limit < 0.25) {
    this._limit = Math.floor(this._limit/2);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('this._storage[index].length ', Object.keys(this._storage[index]).length)
  for (var i = 0; i < this._storage[index].length; i++) {
  	if (this._storage[index][i][0] === k) {
  		this._storage[index].splice(i, 1);
  		this._numOfTuples--;
  	}
  }
};



var hashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions? linear
 */


