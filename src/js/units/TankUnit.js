"use strict";

var BaseUnit = require("./BaseUnit");
var Types = require("./Types");

var TankUnit = function(game) {
  this.initSuper(game);
  this.type = Types.GROUND;
}

var publicMethods = function() {};

var privateMethods = function() {
  this._initAttributes = function() {
    this._moveToX = null;
    this._moveToY = null;
    this._strength = 0;
    this._size = 0;
    this._ecm = 0;
    this._optics = 0;
    this._speed = 60;
    this._stealth = 0;
    this._fuel = 0;
    this.type = Types.INVALID;
  };

  this._initBaseSprite = function() {
    var x = 0;
    var y = this.game.height * 0.81;
    var tank = this.game.add.sprite(x, y, 'tank');

    this._dragToMoveLine = new Phaser.Line(0, 0, 0, 0);

    this._initAcradePhysics(tank);
    this._addInputListener(tank);

    return tank;
  };

  this._initWeaponSprite = function() {
    var x = this._baseSprite.x;
    var y = this._baseSprite.y;
    var weapon = this.game.add.sprite(x, y, 'turret');
    weapon.anchor.setTo(0.5, 0.5);
    return weapon;
  };
};

BaseUnit.privateMethods.call(TankUnit.prototype);
BaseUnit.publicMethods.call(TankUnit.prototype);

privateMethods.call(TankUnit.prototype);
publicMethods.call(TankUnit.prototype);

module.exports = TankUnit;