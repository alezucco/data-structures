var makeTree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods)
  newTree.value = value;
  newTree.children = [];
  newTree.parent=null;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var tempChild= makeTree(value);
  tempChild.parent=this;
  this.children.push(tempChild);
  //this.children[this.children.indexOf(value)].parent= "yes"
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

treeMethods.removeParent= function(child){
  console.log(child.value);
  var search= function(array){
    for (var i=0;i<array.length;i++){
      if(array[i].value===child){
        var temp = array[i];
        array[i].parent.children.splice(i,1);
        temp.parent= null;
      }else if(array[i].children.length>0){

        //if(array[i].children===undefined){debugger;}
        search(array[i].children);
      }
    }
  }
  search(this.children);
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


