"use strict";

var port = process.env.PORT || 8080;
var glob = require("glob");
var path = require("path");

var rested = require("rested");

var routes = glob.sync("routes/*.js").map(function (e, i, a) {
	return require(path.join(__dirname, e));
});

var server = rested.createServer({ "routes": routes });

server.listen(port, function () {
	console.log("Server listening on port " + port);
});
