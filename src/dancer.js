// Creates and returns a new dancer object that can step
//make this into pseudoclassical
var MakeDancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //dancer.setPosition(top, left);
  this.step();
};

MakeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


MakeDancer.prototype.step = function(){
  // the basic dancer doen't do anything interesting at all on each step,
  // it just schedules the next step
  //console.log(this); //-- this is MakeBlinkyDancer

  //var boundFunk = this.step.bind(this);
  setTimeout(MakeBlinkyDancer.prototype.step, MakeBlinkyDancer.timeBetweenSteps);
};
