var makeQueue = function(){
  var someInstance = {};
  var newer = 0;
  var old = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[old] = value;
    old++;
  };

  someInstance.dequeue = function(){
    if (old - newer){
      var result = storage[newer];
      delete storage[newer];
      newer++;
      return result;
    }
  };

  someInstance.size = function(){
    return old - newer;
  };

  return someInstance;
};
