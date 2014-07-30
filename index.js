var inherits = require('util').inherits;
var Transform = require('stream').Transform;
var ngram = require('ngram');

function NGramStream(min, max) {
  if(!(this instanceof NGramStream)) {
    return new NGramStream(min, max);
  }
  Transform.call(this, {
    objectMode: true
  });
  this.min = min;
  this.max = max;
}

inherits(NGramStream, Transform);

NGramStream.prototype._transform = function _transform(str, encoding, cb) {
  var ngrams = ngram(str.toString(), this.min, this.max);
  for(var i = 0; i < ngrams.length; i++) {
    this.push(ngrams[i]);
  }
  cb();
};

module.exports = NGramStream;
