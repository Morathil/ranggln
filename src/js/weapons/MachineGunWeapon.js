"use strict";

var BaseWeapon = require("./BaseWeapon");

var MachineGunWeapon = function(game) {
  BaseWeapon.call(this, game);

  this._rounds = 1000000;
  this._roundsPerMinute = 1000;
  this._reloadTime = 0;
  this._accuracy = 0;
  this._projectileSpeed = 5000;

  this._rangeGround = 1000;
  this._rangeAir = 1000;
}

var publicMethods = function() {};

var privateMethods = function() {
  this._shootProjectile = function(targetPosition, shooterPosition) {
    var projectile = this.game.add.sprite(shooterPosition.x, shooterPosition.y, 'machineGunProjectile');
    projectile.checkWorldBounds = true;
    projectile.outOfBoundsKill = true;

    var angle = Phaser.Point.angle(shooterPosition, targetPosition);
    projectile.rotation = angle - Math.PI / 2;

    this.game.physics.enable(projectile, Phaser.Physics.ARCADE);

    var direction = Phaser.Point.subtract(targetPosition, shooterPosition);
    direction.normalize();
    direction.multiply(this._projectileSpeed, this._projectileSpeed);
    projectile.body.velocity.setTo(direction.x, direction.y);
  };
};

privateMethods.call(MachineGunWeapon.prototype);
publicMethods.call(MachineGunWeapon.prototype);

module.exports = MachineGunWeapon;
