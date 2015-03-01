"use strict";

var StateIds = require("./States");

var LoadingState = function(game) {}

var publicMethods = function() {
  var filter;
  var sprite;

  this.preload = function() {
    this.game.load.image('background_01', 'img/background_01.png');
    this.game.load.image('background_02', 'img/background_02.png');
    this.game.load.image("tank", "img/tank.png");
    this.game.load.image("turret", "img/turret.png");
    //  From http://glslsandbox.com/e#16133.0
    var fragmentSrc = [
      "precision mediump float;",
      "uniform float     time;",
      "uniform vec2      resolution;",
      "#define PI 0.01",
      "void main( void ) {",
      "vec2 p = ( gl_FragCoord.xy / resolution.xy ) - 0.5;",
      "float sx = 0.2*sin( 25.0 * p.y - time * 5.);",
      "float dy = 0.9/ ( 50. * abs(p.y - sx));",
      "gl_FragColor = vec4( (p.x + 0.5) * dy, 0.5 * dy, dy-1.65, 5.0 );",
      "}"
    ];

    filter = new Phaser.Filter(this.game, null, fragmentSrc);
    filter.setResolution(window.innerWidth, window.innerHeight);

    sprite = this.game.add.sprite();
    sprite.width = window.innerWidth;
    sprite.height = window.innerHeight;

    sprite.filters = [filter];
  };

  this.create = function() {
    // TODO: Remove setTimeout once assets gets preloaded
    var that = this;
    setTimeout(function() {
      that.game.state.start(StateIds.GAME_STATE_ID);
    }, 500);
  }

  this.update = function() {
    filter.update(this.game.input.activePointer);
  };

  this.resize = function() {
    Game.scale.setGameSize(window.innerWidth, window.innerHeight);
  };
};

var privateMethods = function() {

};

privateMethods.call(LoadingState.prototype);
publicMethods.call(LoadingState.prototype);

module.exports = LoadingState;