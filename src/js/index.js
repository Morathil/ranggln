"use strict";

var LocalStorageUtils = require("./utils/LocalStorageUtils");
var StatesConfig = require("./states/States");

var InitializeState = require("./states/InitializeState");
var MenuState = require("./states/MenuState");
var LoadingState = require("./states/LoadingState");

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example');

window.Game = game;
window.onresize = function() {
	Game.scale.setGameSize(window.innerWidth, window.innerHeight);
}

game.state.add(StatesConfig.INITIALIZE_STATE_ID, new InitializeState(game), true);
game.state.add(StatesConfig.MENU_STATE_ID, new MenuState(game));
game.state.add(StatesConfig.LOADING_STATE_ID, new LoadingState(game));
game.state.add(StatesConfig.LOADING_STATE_ID, new GameState(game));
