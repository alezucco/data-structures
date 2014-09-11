var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value){
    var newNode=makeNode(value)
    if (list.tail === null){
      list.tail=newNode;
      list.head=newNode;
    //list.tail === null
    //list.tail.next -> error
     }else{

      list.tail.next= newNode;
      list.tail=newNode;
    }
    //list.tail = 26
    //26.next = null
    //list.tail.next = makeNode(value) >> 26 -> 27
    //list.tail = 27

  };

  list.removeHead = function(){
    if(list.head!==null){
      var removed=list.head;
      list.head = removed.next
      return removed.value;
    }
  };

  list.contains = function(target){
    var search = function(node){
      if (node.value === target){
        return true;

      }else if (node.next!==null){
        return search(node.next);
      }else{
        return false;
      }
    }
    return search(list.head);
  };



  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//var 1 = makeNode(12);

