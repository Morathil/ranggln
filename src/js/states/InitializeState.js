"use strict";

var MenuState = require("./MenuState");
var StatesConfig = require("./States");

var InitializeState = function(game) {
	this.game = game;
}

var publicMethods = function() {
    this.preload = function() {
      this.game.load.image('einstein', '../img/logo.png');
    };

    this.create = function() {
			this.game.state.start(StatesConfig.MENU_STATE_ID);
    };
};

var privateMethods = function() {};

privateMethods.call(InitializeState.prototype);
publicMethods.call(InitializeState.prototype);

module.exports = InitializeState;