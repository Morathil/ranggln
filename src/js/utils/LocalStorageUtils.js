"use strict";

var LocalStorageUtils = function() {}

var publicMethods = function() {
	this.set = function(lsKey, data) {
		data = JSON.stringify(data);
		localStorage.setItem(lsKey, data);
	}

	this.get = function(lsKey, dataType) {
		var dataString = localStorage.getItem(lsKey);
		return (dataString ? JSON.parse(dataString) : this._getDefaultValue());
	};
};

var privateMethods = function() {
	this._getDefaultValue = function(dataType) {
		switch (dataType) {
			case "Array":
				return [];
			case "Object":
				return {};
			default:
				return null;
		}
	}
};

publicMethods.call(LocalStorageUtils.prototype);

module.exports = new LocalStorageUtils();

