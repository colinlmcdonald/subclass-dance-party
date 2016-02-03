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
  var randomHexGenerator = function() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  this.$node.css('border-color', randomHexGenerator );

  };
