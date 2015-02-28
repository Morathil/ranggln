"use strict";

var MenuState = require("./MenuState");
var StateIds = require("./States");

var InitializeState = function(game) {
  this.game = game;
}

var publicMethods = function() {
  this.preload = function() {
    this.game.load.spritesheet('button', '../img/flixel-button.png', 80, 20);
    this.game.load.image('einstein', '../img/logo.png');
  };

  this.create = function() {
    this.game.state.start(StateIds.MENU_STATE_ID);
  };

};

var privateMethods = function() {};

privateMethods.call(InitializeState.prototype);
publicMethods.call(InitializeState.prototype);

module.exports = InitializeState;