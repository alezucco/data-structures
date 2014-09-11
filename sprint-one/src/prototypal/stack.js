var makeStack = function() {
  var newStack=Object.create(stackMethods);
  newStack.amount=0;
  return newStack;
};

var stackMethods = {

  size:function(){return this.amount;},
  push:function(val){
    this[this.amount]=val;
    this.amount++;
  },
  pop:function(){
    if(this.amount){
      this.amount--;
      var result= this[this.amount];
      delete this[this.amount];
    }
    return result;
  }


};


