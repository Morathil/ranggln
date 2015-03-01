"use strict";

var StateIds = require("./States");

var TextButton = require("./../utils/TextButton");

var SettingsSate = function(game) {}

var publicMethods = function() {
  this.preload = function() {
    this.game.load.image('einstein', '../img/logo.png');
  };

  this.create = function() {
    new TextButton(this.game, 'Menu', 'nokia', 12, 400, 400, 'button', function() {
        this.game.state.start(StateIds.MENU_STATE_ID);
      },
      this, 0, 1, 2);
  };

  this.resize = function() {
    Game.scale.setGameSize(window.innerWidth, window.innerHeight);
  };
};

var privateMethods = function() {};

publicMethods.call(SettingsSate.prototype);
publicMethods.call(SettingsSate.prototype);

module.exports = SettingsSate;
