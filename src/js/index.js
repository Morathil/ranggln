"use strict";

var LocalStorageUtils = require("./utils/LocalStorageUtils");


var game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.image('einstein', '../img/logo.png');
}

function create() {
    game.add.sprite(100, 100, 'einstein');
}