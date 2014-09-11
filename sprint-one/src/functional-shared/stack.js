var makeStack = function() {
  var newStack={};
 newStack.amount = 0;
 _.extend(newStack, stackMethods);

return newStack;
};

var stackMethods = {
  size:function(){return this.amount;},
  push:function(val){

    this[this.amount]= val;
    this.amount++;
  console.log(this);
  },
  pop: function (){
    if(this.amount>0){
      this.amount--;
      var result=this[this.amount];
      delete this[this.amount];
    }
    return result;
  }

};

//newStack.size()

