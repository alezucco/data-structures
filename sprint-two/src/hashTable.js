var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var temp=[];
  //temp.push(k);
  //temp.push(v);
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    temp.push(this._storage.get(i));
    temp.push([k,v]);
    this._storage.set(i,temp);
  }else{
    this._storage.set(i, [k,v]);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    if(this._storage.get(i)[0]===k){
      return this._storage.get(i)[1];
    }
    if (Array.isArray(this._storage.get(i)[0])){
      for (var j=0;j<this._storage.get(i).length;j++){
        if(this._storage.get(i)[j][0]===k){
          return this._storage.get(i)[j][1];
        }
      }
    }
  }else{
    return null;
  }
}

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


//each on ._storage >>storage
//[[ ],[ ],[ ]]
