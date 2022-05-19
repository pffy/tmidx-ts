#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for IdxToneMarksIso
 * git      : https://github.com/pffy/tmidx-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { IdxToneMarksIso } = require('../.');

console.log('good?: %s', IdxToneMarksIso.tmidx['hao3']);
console.log('done.');
