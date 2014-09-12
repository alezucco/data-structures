var makeTree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods)
  newTree.value = value;
  newTree.children = [];

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){

  return this.children.push(makeTree(value));


};

treeMethods.contains = function(target){
  var result=false;
  var search=function(array){
    for (var i=0;i<array.length;i++){

      if(array[i].value===target){
        result=true;
      }else if(array[i].children.length>0){

        //if(array[i].children===undefined){debugger;}
        search(array[i].children);
      }
    }
  }
  search(this.children);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
//[{value:value}, {1value:value}].push(object-->value:value)
//[[ ][ ]]
//tree.value == 7;
//trre.children[0] = {value:value}
//tree.children[0][value] -- > value
//tree.children[0][this.value] -- > undefined
//tree.children[0][7] -- > undefined
