"use strict";

var StateIds = require("./States");

var MenuState = function(game) {}

var publicMethods = function() {
  this.preload = function() {
    this.game.load.image('einstein', '../img/logo.png');
  };

  this.create = function() {
    this.game.add.button(400, 400, 'button',
      function() {
        this.game.state.start(StateIds.MENU_STATE_ID);
      },
      this, 0, 1, 2);
  };
};

var privateMethods = function() {

};

publicMethods.call(MenuState.prototype);

module.exports = MenuState;