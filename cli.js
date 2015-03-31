#!/usr/bin/env node

'use strict';
var argv = require('minimist')(process.argv.slice(2)); 
var broccoliHtml = require('./');

console.log(argv);
