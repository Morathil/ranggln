"use strict";

var MenuState = function(game) { }

var publicMethods = function() {
    this.create = function() {
        this.game.add.sprite(100, 100, 'einstein');
    };
};

var privateMethods = function() {};

publicMethods.call(MenuState.prototype);
publicMethods.call(MenuState.prototype);

module.exports = MenuState;
