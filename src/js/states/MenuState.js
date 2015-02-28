"use strict";

var MenuState = function(game) { }

var publicMethods = function() {
    this.preload = function() {
        this.game.load.image('einstein', '../img/logo.png');
    };

    this.create = function() {
        this.game.add.sprite(100, 100, 'einstein');
    };
};

var privateMethods = function() {

};

publicMethods.call(MenuState.prototype);

module.exports = MenuState;
