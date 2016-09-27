# fetch-enhance

[![NPM version](https://img.shields.io/npm/v/fetch-enhance.svg?style=flat-square)](https://npmjs.com/package/fetch-enhance) [![NPM downloads](https://img.shields.io/npm/dm/fetch-enhance.svg?style=flat-square)](https://npmjs.com/package/fetch-enhance) [![Build Status](https://img.shields.io/circleci/project/egoist/fetch-enhance/master.svg?style=flat-square)](https://circleci.com/gh/egoist/fetch-enhance)

It throws when the response status code is not ok (200~299).

## Install

You can use the [CDN version](https://unpkg.com/fetch-enhance/dist/) or npm package:

```bash
$ npm install --save fetch-enhance
```

## Usage

### In Browser

```js
fetchEnhance('/url').catch(err => {
  // err.status is beyond 200 and 299
  // if it's 404
  console.log(err.message)
  // 'Not Found'

  // same as window.fetch 's response data
  // eg: data.json() data.text() ...
  console.log(err.data)
})
```

### In Node.js

```js
const fetch = require('node-fetch')
const fetchEnhance = require('fetch-enhance')(fetch)

fetchEnhance('/url').catch(/* ... */)
```

## API

### fetchEnhance(...options)

Used in browser environment, the same as the options in `window.fetch`.

### fetchEnhance(fetchImplementation)

Used in Node.js environment, returns a function using the provided fetch implementation, for example: `const fetchImplementation = require('node-fetch')`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
