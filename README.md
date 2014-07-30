# ngram-stream

[ngram]() stream from strings.

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
