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
  this.$node.css('left', randomNumber +'px');
  this.$node.css('right', randomNumber +'px');
  var randomHexGenerator = function() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  this.$node.css('border-color', randomHexGenerator );
  setInterval(function(){this.$node.css('transform', 'rotate(45deg)')}, ((1/4)*1000));

  };

var listener = function(){
  $(".lineUps").on('click', function(){

    var $dancers = $('.dancer');
    $dancers.css('position', 'relative')
    $dancers.css('left', '750px')

  } )
}
