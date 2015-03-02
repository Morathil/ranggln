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

  this._rangeGround = 0;
  this._rangeAir = 0;
  this._isReloading = false;

  this._projectileImage = '';
}

var publicMethods = function() {
  this.reload = function(callback) {
    if (this._magazines > 0) {
      this._isReloading = true;
      setTimeout(function() {
        --this._magzines;
        this._rounds = this._magazineSize;
        callback(true);
        this._isReloading = false;
      }, this._reloadTime);
    } else {
      callack(false); // false means that the magazines are empty
    }
  };

  this.shoot = function(enemy, shooter, callback) {
    var distance = Phaser.Point.distance(enemy.position, shooter.position);
    if (this._rounds > 0 && !this._isReloading) {
      var that = this;
      setTimeout(function() {
        that._shootProjectile(enemy.position, shooter.position);
        callback(true);
      }, 60000 / this._roundsPerMinute);
      --this._rounds;
    } else {
      callback(false); // == empty
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