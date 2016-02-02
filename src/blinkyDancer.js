var BlinkyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this);
  //this.$node = $('.dancer');
  this.step();
  console.log('blinky dancers top & left', top, left)
  this.setPosition(top, left);
  //console.log('value of this within BlinkyDancer subClass', this);
};


  BlinkyDancer.prototype = Object.create(Dancer.prototype);
  BlinkyDancer.prototype.constructor = BlinkyDancer;

  BlinkyDancer.prototype.step = function(){

    //console.log('value of Dancer.protoype.step within BlinkyDancer.prototype.step', Dancer.prototype.step)
  Dancer.prototype.step.call(this);

   this.$node.toggle();
   //console.log('value of this.$node within BlinkyDancer', this.$node);
  };













  // MakeBlinkyDancer.prototype.setTimeout = function() {
  //   this.setTimeout = setTimeout();
  // }

// var timeBetweenSteps = 100;
// blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps)
// blinkyDancer.step();


        //var stepper = bind.call(this.$node.toggle());
    //var boundToggle = this.$node.toggle().bind(this.$node);
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
