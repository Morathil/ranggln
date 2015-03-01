"use strict";

var StateIds = require("./States");

var GameState = function(game) {}

var publicMethods = function() {
  this.create = function() {
    this.game.add.button(400, 400, 'button', function() {
        this.game.state.start(StateIds.MENU_STATE_ID);
      },
      this, 0, 1, 2);
  };

  this.resize = function() {
    Game.scale.setGameSize(window.innerWidth, window.innerHeight);
  };
};

var privateMethods = function() {};

privateMethods.call(GameState.prototype);
publicMethods.call(GameState.prototype);

module.exports = GameState;