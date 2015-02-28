"use strict";

var LocalStorageUtils = require("./utils/LocalStorageUtils");
var StatesConfig = require("./states/States");
var MenuState = require("./states/MenuState");

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example');

window.Game = game;
window.onresize = function() {
	Game.scale.setGameSize(window.innerWidth, window.innerHeight);
}

game.state.add(StatesConfig.MENU_STATE_ID, new MenuState(game));

game.state.start(StatesConfig.MENU_STATE_ID);
