var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = MakeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this);
  this.$node = $('.addDancerButton');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  console.log(this.$node);
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
//  this.oldStep = this.step;
};


  MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
  MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

  MakeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    //this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  //  console.log("Value of this within MakeBlinkyDancer.step", this);
    $('.addDancerButton').toggle();

   MakeDancer.prototype.step.call(this);
  };


//console.log(MakeDancer.prototype.step())
    //var stepper = bind.call(this.$node.toggle());
    //var boundToggle = this.$node.toggle().bind(this.$node);
    //console.log(boundToggle);
    //setTimeout(this.step.bind(this.$node), this.timeBetweenSteps);
    //setTimeout(boundToggle, this.timeBetweenSteps);
