"use strict";

var q = require("q");

var route = module.exports = {};

route.path = "/exams";
route.handlers = {
	"get": function get(request, response) {
		response.write("GET exams\n");
		return q(true);
	}
};
