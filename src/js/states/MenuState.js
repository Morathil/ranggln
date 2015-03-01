"use strict";

var StateIds = require("./States");

var TextButton = require("./../utils/TextButton");

var MenuState = function(game) {}

var publicMethods = function() {
  this.create = function() {
    this.game.add.sprite(100, 100, 'einstein');

    new TextButton(this.game, 'Settings', 'nokia', 12, 400, 400, 'button', function() {
        this.game.state.start(StateIds.SETTINGS_STATE_ID);
      },
      this, 0, 1, 2);

    new TextButton(this.game, 'Play', 'nokia', 12, 400, 370, 'button', function() {
        this.game.state.start(StateIds.LOADING_STATE_ID);
      },
      this, 0, 1, 2);
  };

  this.resize = function() {
    Game.scale.setGameSize(window.innerWidth, window.innerHeight);
  };
};

var privateMethods = function() {};

publicMethods.call(MenuState.prototype);
publicMethods.call(MenuState.prototype);

module.exports = MenuState;