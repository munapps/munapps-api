"use strict";

var glob = require("glob");
var path = require("path");
var rested = require("rested");

var routes = glob.sync("routes/*.js").map(function (e, i, a) {
	return require(path.join(__dirname, e));
});

var server = rested.createServer({
	"routes": routes,
	"version": 1
});

server.listen(8080, function () {
	console.log("Server listening on port 8080");
});
