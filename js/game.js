var preload = require('./preload');
var create = require('./create');
var update = require('./update');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '#container', {
  preload: preload,
  create: create,
  update: update
});