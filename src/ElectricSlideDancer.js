var SliderDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this);
  this.step();
  this.setPosition(top, left);
};


  SliderDancer.prototype = Object.create(Dancer.prototype);
  SliderDancer.prototype.constructor = SliderDancer;

  SliderDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  var randomNumber = Math.random() * 1000

  this.$node.css('top', randomNumber + 'px');
  this.$node.css('bottom', randomNumber +'px');

  var randomHexGenerator = function() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  this.$node.css('border-color', randomHexGenerator );
  this.$node.toggle();


  };
