"use strict";

var BaseUnit = require("./BaseUnit");
var Types = require("./Types");

var MachineGunWeapon = require("./../weapons/MachineGunWeapon");

var HelicopterUnit = function(game) {
  this.initSuper(game);
  this.type = Types.GROUND;

  this._initMachineGunWeapon();
}

var publicMethods = function() {};

var privateMethods = function() {
  this._initMachineGunWeapon = function() {
    this._machineGunWeapon = new MachineGunWeapon(this.game);
    this.game.input.onDown.add(
      function(pointer) {
        pointer.type = 0;
        this._machineGunWeapon.shoot(pointer, {
          position: this._weaponSprite.position
        }, function() {});
      }, this);
  };

  this._initAttributes = function() {
    this._moveToX = null;
    this._moveToY = null;
    this._strength = 0;
    this._size = 0;
    this._ecm = 0;
    this._optics = 0;
    this._speed = 100;
    this._stealth = 0;
    this._fuel = 0;
    this.type = Types.INVALID;
  };

  this._initBaseSprite = function() {
    var x = 50;
    var y = this.game.height * 0.81;
    var tank = this.game.add.sprite(x, y, 'helicopter');
    tank.angle = 90;
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

  this._updateWeaponPosition = function() {
    this._weaponSprite.x = this._baseSprite.x + 30;
    this._weaponSprite.y = this._baseSprite.y + 15;
    this._weaponSprite.rotation = this._baseSprite.rotation;
  };
};

BaseUnit.privateMethods.call(HelicopterUnit.prototype);
BaseUnit.publicMethods.call(HelicopterUnit.prototype);

privateMethods.call(HelicopterUnit.prototype);
publicMethods.call(HelicopterUnit.prototype);

module.exports = HelicopterUnit;