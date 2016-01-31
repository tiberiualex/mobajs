module.exports = function create() {
  var game = require('./game');
  console.log('game::create');

  game.physics.startSystem(Phaser.Physics.ARCADE);

  var platforms = game.add.group();
  platforms.enableBody = true;
  var ground = platforms.create(0, game.world.height - 30, 'grass');
  ground.scale.setTo(40, 1);
  ground.body.immovable = true;

  var plank = game.add.sprite(32, 32, 'plank');
  game.physics.arcade.enable(plank);
  plank.body.gravity.y = 250;
  plank.body.collideWorldBounds = true;
};