var NGramStream = require('../');
var concat = require('concat-stream');

describe('ngram-stream', function() {
  it('should produce ngram with correct length', function(done) {
    var stream = new NGramStream(1, 4);

    // maybe not the best way to test with this...
    var write = concat(function(data) {
      data.should.equal('foobarfoooobbaarfoooobobabarfooboobaobar');
      done();
    });
    stream.pipe(write);
    stream.end('foobar');
  });
});
