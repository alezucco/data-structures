var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value){
    var newNode=makeNode(value)
    if (list.tail === null){
      list.tail=newNode;
      list.head=newNode;
     }else{
      list.tail.next= newNode;
      newNode.prev= list.tail;
      list.tail=newNode;

    }

  };

  list.removeHead = function(){
    if(list.head!==null){
      if(list.head.next!==null){
        list.head.next.prev=null
      }else{
        list.tail=null;
      }
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
  //extra credit
   list.addToHead = function(value){
    var newNode=makeNode(value)
    if (list.head === null){
      list.tail=newNode;
      list.head=newNode;
     }else{
      list.head.prev= newNode;
      newNode.next=list.head;
      list.head=newNode;

    }

  };
  //extra credit
  list.removeTail = function(){
    if(list.tail!==null){
      if (list.tail.prev!==null){
        list.tail.prev.next=null;
      } else{
        list.head=null;
      }
      var removed=list.tail;
      list.tail = removed.prev;
      return removed.value;
    }
  };


  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev=null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//var 1 = makeNode(12);



