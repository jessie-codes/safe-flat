# safe-flat
> Safely flatten a nested JavaScript object.

[![NPM](https://nodei.co/npm/safe-flat.png?compact=true)](https://nodei.co/npm/safe-flat/)

[![Greenkeeper badge](https://badges.greenkeeper.io/jessie-codes/safe-flat.svg)](https://greenkeeper.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Build Status](https://travis-ci.org/jessie-codes/safe-flat.svg?branch=master)](https://travis-ci.org/jessie-codes/safe-flat)
[![Coverage Status](https://coveralls.io/repos/github/jessie-codes/safe-flat/badge.svg?branch=master)](https://coveralls.io/github/jessie-codes/safe-flat?branch=master)

## Installation

``` bash
$ npm i safe-flat
```

## Methods

### flatten(obj, [delimiter])

Flats an object to one level deep. Optionally takes a custom `delimiter`, otherwise uses `.` by default. Circular references within the object will be replaced with `[Circular]`.

``` javascript
const flatten = require('safe-flat')

const original = {
    a: {
        b: {
            c: [{
                val: 'one'
            }, {
                val: 'two'
            }],
            d: 'three'
        },
        e: 'four',
    }
}
original.a.b.f = original.a.b
original.a.b.c.push(original.a)

const flat = flatten(original, '_')
/*
{
  'a.b.c.0': 'one',
  'a.b.c.1': 'two',
  'a.b.c.2': '[Circular]',
  'a.b.c.d': 'three',
  'a.b.e': 'four',
  'a.b.f': '[Circular]'
}
*/
```