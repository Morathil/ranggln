"use strict";

var Types = require("./Types");

// ---- BASE UNIT ---- //

var publicMethods = function() {
  this.initSuper = function(game) {
    this.game = game;
    this._initAttributes();
    this._baseSprite = this._initBaseSprite();
    this._weaponSprite = this._initWeaponSprite();

    this._doDragToMove = false;
  };

  this.update = function() {
    this._move();
    this._updateWeaponPosition();
    this._drawDragToMoveLine();
  };

  this.render = function() {
    this.game.debug.geom(this._dragToMoveLine);
  };
};

var privateMethods = function() {
  this._initAttributes = function() {
    // IMPLEMENT IN SUB CLASS
  };
  this._initBaseSprite = function() {
    // IMPLEMENT IN SUB CLASS
  };

  this._initWeaponSprite = function() {
    // IMPLEMENT IN SUB CLASS
  };

  this._updateWeaponPosition = function() {
    // IMPLEMENT IN SUB CLASS
  };

  this._initAcradePhysics = function(sprite) {
    this.game.physics.enable(sprite, Phaser.Physics.ARCADE);

    sprite.anchor.setTo(0.5, 0.5);

    sprite.body.enable = true;
    sprite.body.allowRotation = false;
    sprite.body.collideWorldBounds = true;;
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
    if (Math.abs(Math.round(this._moveToX - this._baseSprite.x)) <= 5 && Math.abs(Math.round(this._moveToY - this._baseSprite.y)) <= 5) {
      this._baseSprite.body.velocity.x = 0;
      this._baseSprite.body.velocity.y = 0;
      this._moveToX = null;
      this._moveToY = null;
    }

    if (this._moveToX && this._moveToY) {
      this._baseSprite.rotation = this.game.physics.arcade.moveToXY(this._baseSprite, this._moveToX, this._moveToY, this._speed);
    }
  };

  this._drawDragToMoveLine = function() {
    if (this.game.input.activePointer.isDown) {
      if (this._doDragToMove) {
        this._dragToMoveLine.start.set(this._baseSprite.x, this._baseSprite.y);
        this._dragToMoveLine.end.set(this.game.input.activePointer.x, this.game.input.activePointer.y);
      }
    }
  };
};

module.exports = {
  privateMethods: privateMethods,
  publicMethods: publicMethods
}