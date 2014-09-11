var makeQueue = function(){
  var newQueue={};
 newQueue.older = 0;
 newQueue.newer=0;
 _.extend(newQueue, queueMethods);

return newQueue;
};

var queueMethods = {

   size:function(){return ((this.older)-(this.newer));},
  enqueue:function(val){

    this[this.older]= val;
    this.older++;
  console.log(this);
  },
  dequeue: function (){
    if(this.size()){
      var result=this[this.newer];
      delete this[this.newer];
      this.newer++;
    }
    return result;
  }

};


