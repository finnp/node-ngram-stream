'use strict';

var NGramStream = require('./');

var stream = new NGramStream(1, 4);

stream.on('data', function(data) {
  console.log(data);
});

stream.write('foobar');
stream.write('bazqux');
