'use strict';
const webpackMerge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = webpackMerge(prodEnv, {
  NODE_ENV: '"development"'
});
