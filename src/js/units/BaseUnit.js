"use strict";

var Types = require("./Types");

var BaseUnit = function(game) {
  privateMethods.call(this);
  publicMethods.call(this);

  this.game = game;
  this._initAttributes();
  this._unit = this._initUnit();
}

var publicMethods = function() {
  this.move = function() {
    if (this._moveToX && this._unit.x !== this._moveToX) {
      if (this._unit.x < this._moveToX) {
        this._unit.x += this._speed;
      } else {
        this._unit.x -= this._speed;
      }
    }

    if (this._moveToY && this._unit.y !== this._moveToY) {
      if (this._unit.y < this._moveToY) {
        this._unit.y += this._speed;
      } else {
        this._unit.y -= this._speed;
      }
    }
  };
};

var privateMethods = function() {
  this._initAttributes = function() {
    this._moveToX = null;
    this._moveToY = null;
    this._strength = 0;
    this._size = 0;
    this._ecm = 0;
    this._optics = 0;
    this._speed = 1;
    this._stealth = 0;
    this._fuel = 0;
    this.type = Types.INVALID;
  };

  this._initUnit = function() {
    var unit = this.game.add.group();
    unit.x = 0;
    unit.y = this.game.height * 0.81;
    unit.create(0, 0, 'tank');
    unit.create(10, 10, 'turret');

    unit.forEach(this._addInputListener, this);
    return unit;
  }

  this._addInputListener = function(child) {
    child.inputEnabled = true;
    child.events.onInputDown.add(this._onInputDown, this);
    child.events.onInputUp.add(this._onInputUp, this);
  };

  this._onInputDown = function(sprite, pointer) {

  };

  this._onInputUp = function(sprite, pointer) {
    this._moveToX = pointer.clientX;
    this._moveToY = pointer.clientY;
  };
};


module.exports = BaseUnit;