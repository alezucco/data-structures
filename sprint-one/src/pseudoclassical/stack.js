var Stack = function() {
  this.amount=0;

};

Stack.prototype.size=function(){return this.amount;}

Stack.prototype.push=function(val){
    this[this.amount]=val;
    this.amount++;
  }

Stack.prototype.pop=function(){
    if(this.amount){
      this.amount--;
      var result= this[this.amount];
      delete this[this.amount];
    }
    return result;
  }
