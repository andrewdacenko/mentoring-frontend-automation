describe('app: HomeController', function() {
  var sut;

  beforeEach(function() {
    inject(function($controller) {
      sut = $controller('HomeController');
    });
  });

  it('should be instance', function () {
    sut.should.be.object;
  })
});