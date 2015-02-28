"use strict";

var StateIds = require("./States");

var MenuState = function(game) {}

var publicMethods = function() {
  this.create = function() {
    this.game.add.sprite(100, 100, 'einstein');
    this.game.add.button(400, 400, 'button', function() {
        this.game.state.start(StateIds.SETTINGS_STATE_ID);
      },
      this, 0, 1, 2);
  };
};

var privateMethods = function() {};

publicMethods.call(MenuState.prototype);
publicMethods.call(MenuState.prototype);

module.exports = MenuState;