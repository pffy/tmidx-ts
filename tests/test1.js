#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for IdxToneMarksIso
 * git      : https://github.com/pffy/tmidx-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { IdxToneMarksIso } = require('../.');

const str = 'hao3';
const key = 'ao3';

console.log('good? %s?: %s', str, str.replace(key, IdxToneMarksIso.tmidx[key]);
console.log('done.');
