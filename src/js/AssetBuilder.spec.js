describe('app: AssetBuilder', function () {
  var sut;

  beforeEach(function() {
    inject(function(AssetBuilder) {
      sut = AssetBuilder;
    });
  });

  it('should build object with title and url passed', function () {
    var title = 'Titlte';
    var url = 'http://some.url';

    var asset = sut(title, url);

    asset.should.deep.equal({
      title: title,
      url: url
    });
  })
});
