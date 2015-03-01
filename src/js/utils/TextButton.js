"use strict";

var TextButton = function(game, text, font, fontSize, x, y, assetId, onClick, clickContext, overFrame, outFrame, downFrame, upFrame) {
  this.button = game.add.button(x, y, assetId, onClick, clickContext, overFrame, outFrame, downFrame, upFrame);
  this.text = game.add.bitmapText(x, y, font, text, fontSize);
  this._positionText();
};

var publicMethods = function() {};

var privateMethods = function() {
  this._positionText = function() {
    this.text.x = this.button.x + this.button.width / 2 - this.text.textWidth / 2;
    this.text.y = this.button.y + this.button.height / 2 - this.text.textHeight / 2;
  };
};

privateMethods.call(TextButton.prototype);
publicMethods.call(TextButton.prototype);

module.exports = TextButton;
