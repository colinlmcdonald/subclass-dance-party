describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();

    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
    //  console.log("blinkyDancer.step.callCount #1", blinkyDancer.step.callCount);
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

    //  console.log("blinkyDancer.step.callCount #2", blinkyDancer.step.callCount);
      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
      console.log("blinkyDancer.step.callCount #3", blinkyDancer.step.callCount);

    });
  });
});
