// Creates and returns a new dancer object that can step
//make this into pseudoclassical
var Dancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

//console.log('value of this within Dancer Class', this);
//console.log('value of this.step within Dancer Class', this.step)
};

Dancer.prototype.setPosition = function(top, left){

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);


  //console.log('the value of this.$node within Dancer.prototype.setPosition', this.$node)
};


Dancer.prototype.step = function(){
  // the basic dancer doen't do anything interesting at all on each step,
  // it just schedules the next step

  //console.log('value of this within Dancer.prototype.step', this); //-- this is MakeBlinkyDancer


  //console.log('value of this.step.bind(this)', this.step.bind(this));
  //setTimeout(function IDK(){ /*something */ }, this.timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps)
};


//rename the class?
//what is the super class and what is the sub class?
//make it more pseudoclassical
