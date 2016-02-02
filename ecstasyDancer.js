var EcstasyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this);
  this.step();
  this.setPosition(top, left);
};


  EcstasyDancer.prototype = Object.create(Dancer.prototype);
  EcstasyDancer.prototype.constructor = EcstasyDancer;

  EcstasyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  //make a color changing dancer
  //random hex generator
  //
  this.$node.style ('Ecstatic')

  };
