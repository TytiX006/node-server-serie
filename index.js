#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
var program = require('commander');

program
  .version('0.0.1');

program
  .command('start')
  .action(function(env, options) {
  	console.log('stating serveur : %s', env);
  });

program.parse(process.argv);