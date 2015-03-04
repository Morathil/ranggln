"use strict";

var MenuState = require("./MenuState");
var StateIds = require("./States");

var InitializeState = function(game) {}

var publicMethods = function() {
  this.preload = function() {
    this.game.load.spritesheet('button', 'img/flixel-button.png', 80, 20);
    this.game.load.image('einstein', 'img/logo.png');
    this.game.load.bitmapFont('nokia', 'img/fonts/nokia.png', 'img/fonts/nokia.xml');
    this.game.load.image('machineGunProjectile', 'img/machine-gun-projectile.png');
    this.game.load.image('tankGunProjectile', 'img/tank-gun-projectile.png');
    this.game.load.image('rocketLauncherProjectile', 'img/rocket-launcher-projectile.png');
  };

  this.create = function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    // this.game.state.start(StateIds.MENU_STATE_ID);
    this.game.state.start(StateIds.LOADING_STATE_ID);
  };

  this.resize = function() {
    Game.scale.setGameSize(window.innerWidth, window.innerHeight);
  };
};

var privateMethods = function() {};

privateMethods.call(InitializeState.prototype);
publicMethods.call(InitializeState.prototype);

module.exports = InitializeState;
