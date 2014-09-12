var makeBinarySearchTree = function(value){
  var binTree= Object.create(makeBinarySearchTree.prototype);
  binTree.left= null;
  binTree.right= null;
  binTree.value= value;
  return binTree
};
makeBinarySearchTree.prototype.insert=function(value){
  var searchd= function(node){
    if(node.value===value){
      return;
    } else if(node.value>value){
      if(node.left===null){
        return node.left=makeBinarySearchTree(value);
      }else {
        return searchd(node.left);
      }
    }else {
      if(node.right===null){
        return node.right=makeBinarySearchTree(value);
      }else{
        return searchd(node.right);
      }
    }
  }
  searchd(this);
}
makeBinarySearchTree.prototype.contains=function(target){

  var search = function(node){
    if(node.value === target){
      return true;
    }else if (node.value>target){
      if(node.left!==null){
        return search(node.left);
      }else{
        return false;
      }

    }else {
      if(node.right!==null){
        return search(node.right);
      }else{
        return false;
      }
    }
  }
  return search(this);

}
makeBinarySearchTree.prototype.depthFirstLog=function(callback){
  var branches=[];
  var traverseTree=function(node){
    if(node.value){
      branches.push(node.value);
    }
    if (node.left){
      traverseTree(node.left);
    }
    if(node.right){
     traverseTree(node.right);
    }
  }
  traverseTree(this);

  return _.each(branches, callback)

}



/*
 * Complexity: What is the time complexity of the above functions?
 */
