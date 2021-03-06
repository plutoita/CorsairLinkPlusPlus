/**
 * CorsairLinkPlusPlus
 * Copyright (c) 2014, Mark Dietzer & Simon Schick, All rights reserved.
 *
 * CorsairLinkPlusPlus is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.0 of the License, or (at your option) any later version.
 *
 * CorsairLinkPlusPlus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with CorsairLinkPlusPlus.
 */
 
"use strict";

var ControllerView = require("Gui/Views/ControllerView");
var util = require("Util");

function Curve(rawData) {
	ControllerView.apply(this, arguments);
}
var p = inherit(Curve, ControllerView);


p.update = function() {
	
};

p.buildElement = function() {
	var self = this;
	return util.makeElementTree({
		tag: "canvas",
		id: "curve",
		attributes: {
			width: 200,
			height: 100
		}
	});
};

p.postBuildElement = function() {
};