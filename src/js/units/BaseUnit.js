"use strict";

var Types = require("./Types");

var BaseUnit = function(game) {
  privateMethods.call(this);
  publicMethods.call(this);

  this.game = game;
  this._initAttributes();
  this._baseSprite = this._initBaseSprite();
  this._weaponSprite = this._initWeaponSprite();

  this._doDragToMove = false;
}

var publicMethods = function() {
  this.update = function() {
    this._move();
    this._updateWeaponPosition();

    if (this.game.input.activePointer.isDown) {
      if (this._doDragToMove) {
        this._dragToMoveLine.start.set(this._baseSprite.x, this._baseSprite.y);
        this._dragToMoveLine.end.set(this.game.input.activePointer.x, this.game.input.activePointer.y);
      }
    }
  };

  this.render = function() {
    this.game.debug.geom(this._dragToMoveLine);
    this.game.debug.lineInfo(this._dragToMoveLine, 32, 32);

    this.game.debug.text("Drag the handles", 32, 550);
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
  }

  this._initWeaponSprite = function() {
    var x = this._baseSprite.x;
    var y = this._baseSprite.y;
    var weapon = this.game.add.sprite(x, y, 'turret');
    weapon.anchor.setTo(0.5, 0.5);
    return weapon;
  }

  this._initAcradePhysics = function(sprite) {
    this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
    sprite.anchor.setTo(0.5, 0.5);
    sprite.body.allowRotation = false;
  };

  this._addInputListener = function(sprite) {
    sprite.inputEnabled = true;
    sprite.events.onInputDown.add(this._onInputDown, this);
    sprite.events.onInputUp.add(this._onInputUp, this);
  };

  this._onInputDown = function(sprite, pointer) {
    this._doDragToMove = true;
    this._dragToMoveLine.start.set(this.game.input.activePointer.x, this.game.input.activePointer.y);
    this._dragToMoveLine.end.set(this.game.input.activePointer.x, this.game.input.activePointer.y);
  };

  this._onInputUp = function(sprite, pointer) {
    this._dragToMoveLine.start.set(0, 0);
    this._dragToMoveLine.end.set(0, 0);
    this._doDragToMove = false;
    this._moveToX = pointer.clientX;
    this._moveToY = pointer.clientY;
  };

  this._move = function() {
    if (Math.abs(Math.round(this._moveToX - this._baseSprite.x)) <= 0 && Math.abs(Math.round(this._moveToY - this._baseSprite.y)) <= 0) {
      this._baseSprite.body.velocity.x = 0;
      this._baseSprite.body.velocity.y = 0;
      this._moveToX = null;
      this._moveToY = null;
    }

    if (this._moveToX && this._moveToY) {
      this._baseSprite.rotation = this.game.physics.arcade.moveToXY(this._baseSprite, this._moveToX, this._moveToY, this._speed);
    }
  };

  this._updateWeaponPosition = function() {
    this._weaponSprite.x = this._baseSprite.x;
    this._weaponSprite.y = this._baseSprite.y;
    this._weaponSprite.rotation = this._baseSprite.rotation;
  };
};


module.exports = BaseUnit;