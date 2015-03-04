"use strict";

var BaseWeapon = require("./BaseWeapon");

var RocketLauncherWeapon = function(game) {
  this._initSuper(game);

  this._magazines = 28;
  this._magazineSize = 5;

  this._rounds = 5;
  this._roundsPerMinute = 10;
  this._reloadTime = 8000;
  this._accuracy = 0;
  this._projectileSpeed = 1000;

  this._rangeGround = 2000;
  this._rangeAir = 1200;

  this._projectileImage = 'rocketLauncherProjectile';
}

var publicMethods = function() {};

var privateMethods = function() {
  this._shootProjectile = function(targetPosition, shooterPosition) {
    var projectile = this.game.add.sprite(shooterPosition.x, shooterPosition.y, this._projectileImage);
    projectile.checkWorldBounds = true;
    projectile.outOfBoundsKill = true;

    var angle = Phaser.Point.angle(shooterPosition, targetPosition);
    projectile.rotation = angle - Math.PI / 2;

    this.game.physics.enable(projectile, Phaser.Physics.ARCADE);
    // TODO (DM): probably needs some improvement because acceleration doesn't look like a rocket
    //            and the projectiles are not hitting the targetwhen the max speed is too high
    this.game.physics.arcade.accelerateToXY(projectile, targetPosition.x, targetPosition.y, this._projectileSpeed);
  };
};

BaseWeapon.privateMethods.call(RocketLauncherWeapon.prototype);
BaseWeapon.publicMethods.call(RocketLauncherWeapon.prototype);

privateMethods.call(RocketLauncherWeapon.prototype);
publicMethods.call(RocketLauncherWeapon.prototype);

module.exports = RocketLauncherWeapon;
