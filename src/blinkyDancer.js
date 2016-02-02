var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = MakeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('.addDancerButton');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};


  BlinkyDancer.prototype = Object.create(Dancer.prototype);
  BlinkyDancer.prototype.constructor = BlinkyDancer;

  BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step

    Dancer.prototype.step.call(this);
    //this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  //  console.log("Value of this within MakeBlinkyDance r.step", this);
   this.$node.toggle();
    // console.log("MakeDancer.prototype.step.call(this)", MakeDancer.prototype.step)

//   console.log('inside BlinkyDancer.step.call', this)

  };

  // MakeBlinkyDancer.prototype.setTimeout = function() {
  //   this.setTimeout = setTimeout();
  // }

// var timeBetweenSteps = 100;
// blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps)
// blinkyDancer.step();

//console.log(MakeDancer.prototype.step())
    //var stepper = bind.call(this.$node.toggle());
    //var boundToggle = this.$node.toggle().bind(this.$node);
    //console.log(boundToggle);
    //setTimeout(this.step.bind(this.$node), this.timeBetweenSteps);
    //setTimeout(boundToggle, this.timeBetweenSteps);

    //Tried in setTimeout:
    //MakeDacner.call(this, top, left, timeBetweenSteps)
    //MakeBlinkyDancer.prototype.step
    //callMethod
      //callMethod with this in it;
      //callMethod with that in it;
      //callMethod with MakeBlinkyDancer.prototype.step();
    //this.step.bind(this)
    //that.$node.toggle().bind(that)
    //MakeBlinkyDancer.prototype.step.bind(this)
    //setTimeout(function() {this.step()}.bind(this), that.timeBetweenSteps);
