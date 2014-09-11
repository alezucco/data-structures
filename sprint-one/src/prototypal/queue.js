var makeQueue = function() {
  var newQueue=Object.create(queueMethods);
  Object.prototype.older=0;
  Object.prototype.newer=0;
  return newQueue;
};

var queueMethods = {
  size:function(){return ((this.older) - (this.newer));},
  enqueue:function(val){
    this[this.older]=val;
    this.older++;
  },
  dequeue:function(){
    if(this.size()){
      var result= this[this.newer];
      delete this[this.newer];
      this.newer++;
    }
    return result;
  }

};


