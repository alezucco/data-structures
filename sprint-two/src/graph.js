var Graph = function(){
  this.edge = [];
  this.amountNodes=0;
};

Graph.prototype.addNode = function(newNode, toNode){
  if(this.amountNodes===1){
    this[newNode] = new Graph;
    this.addEdge(newNode,this.edge[this.edge.length-1])
  }
  if(toNode!==undefined){
    this[newNode] = new Graph;
    this.addEdge(newNode,toNode);
  }else{
    this[newNode] = new Graph;
  }
  this.edge.push(newNode);
  this.amountNodes++;
  //this.edge[this.edge.length-1]
};

Graph.prototype.contains = function(node){
  if(this[node]!==false){
    return true;
  }else{
    return false;
  }
};

Graph.prototype.removeNode = function(node){


  //this[node].edge >> [ puppies, penguins]
  //loop > removeEdge(node, i)
  //delete this[node]

  _.each(this[node],function(relation){
    for (var i=0;i<relation.edge.length;i++){
      if (relation.edge[i]===node){
        delete relation.edge[i];
      }
    }

  })
  delete this.node;
  this.edge.
  this.amountNodes--;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if(this[fromNode].edge.indexOf(toNode)!==-1){
    return true
  }else{
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edge.push(toNode);
  this[toNode].edge.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this[fromNode].edge.splice(this[fromNode].edge.indexOf(toNode),1);
  this[toNode].edge.splice(this[toNode].edge.indexOf(fromNode),1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//fromNode = kitten
//toNode = puppy

//this.fromNode.edge = toNode

