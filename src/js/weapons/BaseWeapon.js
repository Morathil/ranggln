"use strict";

var UnitTypes = require("./../units/Types");

var BaseWeapon = function(game) {
  privateMethods.call(this);
  publicMethods.call(this);
  this.game = game;

  // TODO (DM): probably move to specific units if different magazines for
  // the same weapon exist
  this._magazines = 0;
  this._magazineSize = 0;

  this._rounds = 0;
  this._roundsPerMinute = 0;
  this._reloadTime = 0;
  this._accuracy = 0;
  this._projectileSpeed = 0;
  this._isShooting = false;

  this._rangeGround = 0;
  this._rangeAir = 0;
  this._isReloading = false;

  this._projectileImage = '';
}

var publicMethods = function() {

  this.reload = function(callback) {
    callback = callback || function() {};
    if (this._magazines > 0 && !this._isReloading) {
      var that = this;
      this._isReloading = true;
      setTimeout(function() {
        --that._magazines;
        that._rounds = that._magazineSize;
        that._isReloading = false;
        callback(true);
      }, this._reloadTime);
    } else {
      callback(false); // false means that the magazines are empty
    }
  };

  this.shoot = function(enemy, shooter, callback) {
    if(!this._isShooting && !this._isReloading)
    {
      if (this._rounds > 0) {
        this._isShooting = true;
        var that = this;
        var distance = Phaser.Point.distance(enemy.position, shooter.position);

        that._shootProjectile(enemy.position, shooter.position);
        --this._rounds;

        setTimeout(function() {
          that._isShooting = false;
        }, 60000 / this._roundsPerMinute);

        callback(true);
      } else {
        callback(false); // == empty
      }
    }
  };

  this.lookForEnemiesWithinWeaponRange = function(enemies, shooter) {
    var enemiesInRange = [];
    var enemy
    for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i]._baseSprite;
      var distance = Phaser.Point.distance(enemy.position, shooter.position);
      if ((distance <= this._rangeGround && enemy.type == UnitTypes.GROUND && this._rangeGround > 0 ||
        distance <= this._rangeAir && enemy.type == UnitTypes.AIR && this._rangeAir > 0)) {

        enemiesInRange.push(enemy);

      };
    }

    return enemiesInRange;
  };
};

var privateMethods = function() {
  this._shootProjectile = function(targetPosition, shooterPosition) {
    var projectile = this.game.add.sprite(shooterPosition.x, shooterPosition.y, this._projectileImage);
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

module.exports = BaseWeapon;
