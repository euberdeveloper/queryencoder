![Lint](https://github.com/euberdeveloper/queryencoder/workflows/Lint/badge.svg)
![Build](https://github.com/euberdeveloper/queryencoder/workflows/Build/badge.svg)
![Test](https://github.com/euberdeveloper/queryencoder/workflows/Test/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/euberdeveloper/queryencoder/badge.svg?branch=main)](https://coveralls.io/github/euberdeveloper/queryencoder?branch=main)
[![codecov](https://codecov.io/gh/euberdeveloper/queryencoder/branch/main/graph/badge.svg?token=4YW49XC338)](https://codecov.io/gh/euberdeveloper/queryencoder)
[![Known Vulnerabilities](https://snyk.io/test/github/euberdeveloper/queryencoder/badge.svg?targetFile=package.json)](https://snyk.io/test/github/euberdeveloper/queryencoder?targetFile=package.json)
[![dependencies Status](https://david-dm.org/euberdeveloper/queryencoder/status.svg)](https://david-dm.org/euberdeveloper/queryencoder)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/npm/l/queryencoder.svg)](https://github.com/euberdeveloper/queryencoder/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/euberdeveloper/queryencoder.svg)](https://github.com/euberdeveloper/queryencoder/issues)
[![GitHub stars](https://img.shields.io/github/stars/euberdeveloper/queryencoder.svg)](https://github.com/euberdeveloper/queryencoder/stargazers)
![npm](https://img.shields.io/npm/v/queryencoder.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Types](https://img.shields.io/npm/types/queryencoder.svg)](https://www.npmjs.com/package/queryencoder)

# queryencoder
An npm module to encode an object into query params of an url

## Install

To install queryencoder, run:

```bash
$ npm install queryencoder
```

## Usage

### Simple

```js
const { encode } = require('queryencoder');

const object = {
    str: 'string',
    n: 23,
    truthy: true
};

// The result is '?str=string&n=23&truthy=true'
const queryUrl = encode(object);
```

### With nested object

```js
const { encode } = require('queryencoder');

const object = {
    str: 'string',
    nested: {
        a: 'ciao'
    }
};

// The result is '?str=string&nested=true&nested.a=ciao'
const queryUrl = encode(object);
```

### With some options

```js
const { encode } = require('queryencoder');

const object = {
    str: 'string',
    shown: undefined,
    nested: {
        a: 'ciao'
    },
    vero: true
};

// The result is 'str=string&nested.a=ciao&vero'
const queryUrl = encode(object, {
    preserveUndefined: true,
    addQuestionMark: false,
    flagNestedParents: false,
    shortBoolean: true
});
```

### With some dates

```js
const { encode } = require('queryencoder');

const object = {
    date: new Date('1999-04-23')
};

// The result is 'date=1999-04-23'
const queryUrl = encode(object, {
    dateParser: date => date.toISOString().slice(0, 10)
});
```

## API

The documentation site is: [queryencoder documentation](https://queryencoder.euber.dev)

The documentation for development site is: [queryencoder dev documentation](https://queryencoder-dev.euber.dev)

### encode

The function to encode an object into an url query param string.

**Syntax:**

`const queryString = encode(object, options);`

**Parameters:**

* __object__: It is the object describing the parameters that should be encoded. It is an object that can be nested ad have values of type: string, number, boolean and Date.
* __options__: Optional. It is the object containing the options.

**Options parameters:**

* __addQuestionMark__: Optional. A `boolean` that says if the `?` will be added to the begin of the result. Default value: `true`.
* __shortBoolean__: Optional. If a value is of boolean type, it will be just declared if `true` while omitted if `false`. (e.g. `&val`) Default value: `false`.
* __flagNestedParents__: Optional. A `boolean` that says if in case there is a nested object, a parameter with value true for each path to the parents will be added. Default value: `true`.
* __preserveNull__: Optional. A `boolean` that says if all the null values will be kept and parsed as 'null'. Default value: `true`.
* __preserveUndefined__: Optional. A `boolean` that says if all the undefined values will be kept and parsed as 'undefined'. Default value: `false`.
* __dateParser__: Optional. The function used to parse the dates. Default value: `value => value.toISOString()`.

## Development

To build the module make sure you have the dev dependencies installed.

The project is written in `Typescript`, bundled with `Webpack` and linted with `ESLint`.

### Lint

In order to lint the code:

```bash
$ npm run lint
```

In order to lint and fix the code:

```bash
$ npm run lint:fix
```

There are also the `:source` and `:test` suffix after `lint` in order to lint only the source code or the test code.

### Transpile

To transpile both the source and the test code:

```bash
$ npm run transpile
```

The `source` and the `test` folders will be transpiled in the `dist` folder. Also the `type declarations` will be generated.


To transpile only the source code:

```bash
$ npm run transpile:source
```

The `source` folder will be transpiled in the `dist` folder. Also the `type declarations` will be generated.

### Test

After having transpiled the code, run:

```bash
$ npm test
```

in order to run the tests with `mocha`.

If a coverage report is to be generated, run:

```bash
$ npm run nyc
```

### Bundle

```bash
$ npm run bundle
```

The `source` folder will be compiled in the `bundled` folder. It will contain the bundled `index.js` and `index.d.ts` files.
