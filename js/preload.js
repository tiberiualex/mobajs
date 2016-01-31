

module.exports = function preload(game) {
  var game = require('./game');
  console.log('game::preload');
  game.load.image('plank', 'assets/character.png');
  game.load.image('grass', 'assets/grass.png');
};