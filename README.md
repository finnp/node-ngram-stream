# ngram-stream [![Build Status](https://travis-ci.org/madbence/node-ngram-stream.svg)](https://travis-ci.org/madbence/node-ngram-stream)

[ngram](http://en.wikipedia.org/wiki/N-gram) stream from strings.

## Install

Install the [package](http://npmjs.org/package/ngram-stream) with [npm](http://npmjs.org):

```sh
$ npm install ngram-stream
```

## Usage

```js
var ngram = require('ngram-stream');

var stream = ngram(2, 3);
stream.on('data', function(data) {
  console.log(data);
});

stream.write('foobar');
```

## License

MIT
