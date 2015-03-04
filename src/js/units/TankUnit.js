"use strict";

var BaseUnit = require("./BaseUnit");
var Types = require("./Types");

var MachineGunWeapon = require("./../weapons/MachineGunWeapon");
var TankGunWeapon = require("./../weapons/TankGunWeapon");

var TankUnit = function(game) {
  this.initSuper(game);
  this.type = Types.GROUND;

  this._initMachineGunWeapon();
}

var publicMethods = function() {};

var privateMethods = function() {
  this._initMachineGunWeapon = function() {
    this._machineGunWeapon = new TankGunWeapon(this.game);
  };

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

  this._updateWeaponPosition = function() {
    this._weaponSprite.x = this._baseSprite.x;
    this._weaponSprite.y = this._baseSprite.y;
    this._weaponSprite.rotation = this._baseSprite.rotation;
  };

  this._lookForEnemiesWithinWeaponRange = function(enemies) {
    var enemiesInRange = this._machineGunWeapon.lookForEnemiesWithinWeaponRange(enemies, this._baseSprite);
    var firstEnemyInRange = enemiesInRange[0];
    var that = this;
    if (firstEnemyInRange) {
      this._weaponSprite.rotation = this.game.physics.arcade.angleToXY(this._weaponSprite, firstEnemyInRange.position.x, firstEnemyInRange.position.y);
      this._machineGunWeapon.shoot({
        position: firstEnemyInRange.position,
        type: 0
      }, {
        position: this._weaponSprite.position
      }, function(hasAmmuniation) {
        if (!hasAmmuniation) {
          that._machineGunWeapon.reload()
        }
      });
    }
  };
};

BaseUnit.privateMethods.call(TankUnit.prototype);
BaseUnit.publicMethods.call(TankUnit.prototype);

privateMethods.call(TankUnit.prototype);
publicMethods.call(TankUnit.prototype);

module.exports = TankUnit;