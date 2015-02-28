"use strict";

var LocalStorageUtils = require("./utils/LocalStorageUtils");

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

window.Game = game;
window.onresize = function() {
	Game.scale.setGameSize(window.innerWidth, window.innerHeight);
}

function preload() {
    game.load.image('einstein', '../img/logo.png');
}

function create() {
    game.add.sprite(100, 100, 'einstein');
}