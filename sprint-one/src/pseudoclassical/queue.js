var Queue = function() {
  this.older=0;
  this.newer=0;

};

Queue.prototype.size=function(){
  return ((this.older)-(this.newer))
}
Queue.prototype.enqueue=function(val){
  this[this.older]=val;
  this.older++;

}
Queue.prototype.dequeue= function(){
  if(this.size()){

    var result= this[this.newer];
    delete this[this.newer];
    this.newer++;

    return result;
  }
}
