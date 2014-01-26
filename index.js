"use strict";

var rested = require("rested");

var server = rested.createServer();

server.listen(8080, function () {
	console.log("Server listening on port 8080");
});
