"use strict";

var GameState = function(game) { }

var publicMethods = function() {
    this.create = function() {
    };
};

var privateMethods = function() {};

privateMethods.call(GameState.prototype);
publicMethods.call(GameState.prototype);

module.exports = GameState;
