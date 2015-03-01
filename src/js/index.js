"use strict";

var LocalStorageUtils = require("./utils/LocalStorageUtils");
var StateIds = require("./states/States");

var InitializeState = require("./states/InitializeState");
var MenuState = require("./states/MenuState");
var SettingsState = require("./states/SettingsState");
var LoadingState = require("./states/LoadingState");
var GameState = require("./states/GameState")

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example');

window.Game = game;

game.state.add(StateIds.INITIALIZE_STATE_ID, new InitializeState(game), true);
game.state.add(StateIds.MENU_STATE_ID, new MenuState(game));
game.state.add(StateIds.SETTINGS_STATE_ID, new SettingsState(game));
game.state.add(StateIds.LOADING_STATE_ID, new LoadingState(game));
game.state.add(StateIds.GAME_STATE_ID, new GameState(game));