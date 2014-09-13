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
  if(this.hasOwnProperty(node)){
      return true;
  }else{
    return false;
  }
};

Graph.prototype.removeNode = function(node){


  //this[node].edge >> [ puppies, penguins]
  //loop > removeEdge(node, i)
  //delete this[node]

  _.each(this[node].edge,function(relation){
    this.removeEdge(relation, node);
    if (this[relation].edge.length === 0){
      delete this[relation];
    }
  })
  this.edge.splice(this.edge.indexOf(node),1);
  delete this[node];

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
  if (this[toNode].edge.length ===0){
//console.log(this[toNode].edge.length)
      delete this[toNode];
  }
  if (this[fromNode].edge.length ===0){
//console.log(this[fromNode].edge.length)
    delete this[fromNode];
    //console.log(this[fromNode])
    //console.log(this)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//fromNode = kitten
//toNode = puppy

//this.fromNode.edge = toNode

