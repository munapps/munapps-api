"use strict";

var port = process.env.PORT || 8080;
var file = require("fs").readFileSync;
var glob = require("glob");
var path = require("path");

var rested = require("rested");

var routes = glob.sync("routes/*.js").map(function (e, i, a) {
	return require(path.join(__dirname, e));
});

var server = rested.createServer({
	"crt": file(path.join(__dirname, "files/api.munapps.ca.crt")),
	"key": file(path.join(__dirname, "files/api.munapps.ca.key")),
	"secure": true,
	"routes": routes
});

server.eachRequest(function (request, response) {
	response.setHeader("X-Powered-By", "Coffee");
	response.setHeader("X-Shenanigans", "none");
	response.setHeader("X-GitHub", "http://git.io/3K55mA");
});

server.listen(port, function () {
	console.log("Server listening on port " + port);
});
