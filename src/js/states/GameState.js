"use strict";

var StateIds = require("./States");
var TextButton = require("./../utils/TextButton");

var TankUnit = require("./../units/TankUnit");
var HelicopterUnit = require("./../units/HelicopterUnit");

var MachineGunWeapon = require("./../weapons/MachineGunWeapon");


var GameState = function(game) {
  this.background_01 = null;
  this.background_02 = null;
  this._units = [];
  this._enemies = [];

  this._tmpFlag = false;
}

var publicMethods = function() {
  this.create = function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.background_01 = this.game.add.sprite(0, 0, 'background_01');
    this.background_02 = this.game.add.sprite(0, 0, 'background_02');

    this._collisionGroupTanks = this.game.add.group();
    this._collisionGroupHelicopters = this.game.add.group();

    this._resizeBackground();

    new TextButton(this.game, 'Menu', 'nokia', 12, 100, 400, 'button', function() {
        this.game.state.start(StateIds.MENU_STATE_ID);
      },
      this, 0, 1, 2);

    new TextButton(this.game, 'Tank', 'nokia', 12, 100, 370, 'button', function() {
        this._addUnit("tank");
      },
      this, 0, 1, 2);

    new TextButton(this.game, 'Helicopter', 'nokia', 12, 100, 340, 'button', function() {
        this._addUnit("helicopter");
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
      unit.update(this._enemies);
    }
    this.game.physics.arcade.collide(this._collisionGroupTanks);
    this.game.physics.arcade.collide(this._collisionGroupHelicopters);
  };

  this.render = function() {
    for (var i = 0; i < this._units.length; i++) {
      var unit = this._units[i];
      unit.render();
    }
  };
};

var privateMethods = function() {
  this._addUnit = function(type) {
    var unit;
    switch (type) {
      case "tank":
        unit = new TankUnit(this.game);
        if (this._tmpFlag) {
          this._enemies.push(unit);
        } else {
          this._units.push(unit);
        }
        this._collisionGroupTanks.add(unit._baseSprite)
        break;

      case "helicopter":
        unit = new HelicopterUnit(this.game);
        if (this._tmpFlag) {
          this._enemies.push(unit);
        } else {
          this._units.push(unit);
        }
        this._collisionGroupHelicopters.add(unit._baseSprite)
        break;
    }

    this._tmpFlag = !this._tmpFlag;
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