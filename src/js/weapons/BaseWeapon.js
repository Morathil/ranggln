"use strict";

var UnitTypes = require("./../units/Types");

var BaseWeapon = function() {
  // TODO (DM): probably move to specific units if different magazines for
  // the same weapon exist
  this._magazines = 0;
  this._magazineCount = 0;
  this._magazineSize = 0;

  this._rounds = 0;
  this._roundsPerMinute = 0;
  this._reloadTime = 0;
  this._accuracy = 0;

  this._rangeGround = 0;
  this._rangeAir = 0;
}

var publicMethods = function() {
  this.releaod = function(callback) {
    if (magazine > 0)
    {
      setTimeout(function() {
        --this._magzine;
        this._rounds = this._magazineSize;
        callback(true);
      }, this._reloadTime);
    }
    callack(false); // false means that the magazines are empty
  };

  this.shoot = function(enemy, shooter, callback) {
    if(enemy.position.distance(shooter.position) <= range &&
       (enemy.type == UnitTypes.GROUND && this._rangeGround > 0 ||
        enemy.type == UnitTypes.AIR && this._rangeAir > 0) &&
       rounds > 0)
    {
      setTimeout(function() {
        // shoot sprite
        --rounds;
        callback(true);
      }, 60000 / this._roundsPerMinute);
    }
    callback(false); // == empty
  };
};

var privateMethods = function() {};

privateMethods.call(BaseWeapon.prototype);
publicMethods.call(BaseWeapon.prototype);

module.exports = BaseWeapon;
