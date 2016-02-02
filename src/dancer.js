// Creates and returns a new dancer object that can step
//make this into pseudoclassical
var Dancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(this.top, this.left);
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //dancer.setPosition(top, left);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


Dancer.prototype.step = function(){
  // the basic dancer doen't do anything interesting at all on each step,
  // it just schedules the next step

  //console.log(this); //-- this is MakeBlinkyDancer


//  console.log('insidse Dancer.prototype.step', this) -- this refers to
//new BlinkyDancer because we are using .call on Dancer.prototype.set in
//BlinkyDancer.prototype.set and passing in this, which refers to new Blinky //Dancer
//Jazz--this refers to BlinkyDancer b/c within BlinkyDancer we're binding this //because we are calling Dancer inside of BlinkyDancer
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


//rename the class?
//what is the super class and what is the sub class?
//make it more pseudoclassical
