"use strict";

var StateIds = require("./States");

var TextButton = require("./../utils/TextButton");

var TankUnit = require("./../units/TankUnit");
var HelicopterUnit = require("./../units/HelicopterUnit");

var GameState = function(game) {
  this.background_01 = null;
  this.background_02 = null;
  this._units = [];
}

var publicMethods = function() {
  this.create = function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.background_01 = this.game.add.sprite(0, 0, 'background_01');
    this.background_02 = this.game.add.sprite(0, 0, 'background_02');

    this._resizeBackground();

    new TextButton(this.game, 'Menu', 'nokia', 12, 400, 400, 'button', function() {
        this.game.state.start(StateIds.MENU_STATE_ID);
      },
      this, 0, 1, 2);

    new TextButton(this.game, 'Spawn Tank', 'nokia', 12, 400, 370, 'button', function() {
        this._addUnit();
      },
      this, 0, 1, 2);
  };

  this.resize = function() {
    Game.scale.setGameSize(window.innerWidth, window.innerHeight);
    this._resizeBackground();
  };

  this.update = function() {
    for (var i = 0; i < this._units.length; i++) {
      var unit = this._units[i];
      unit.update();
    }
  };

  this.render = function() {
    for (var i = 0; i < this._units.length; i++) {
      var unit = this._units[i];
      unit.render();
    }
  };
};

var privateMethods = function() {
  this._addUnit = function() {
    this._units.push(new HelicopterUnit(this.game));
  };

  this._resizeBackground = function() {
    this.background_01.width = this.game.width;
    this.background_01.height = this.game.height;
    this.background_02.width = this.game.width;
    this.background_02.height = this.game.height;
  };
};

privateMethods.call(GameState.prototype);
publicMethods.call(GameState.prototype);

module.exports = GameState;