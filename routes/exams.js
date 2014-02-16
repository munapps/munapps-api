"use strict";

var MUN = require("MUN");

var json = {
	1: {
		"get":
			function get(request, response) {
				return request.authentication()
				.then(MUN.selfService.finalExamSchedule)
				.then(function (result) {
					var stdout = result[0];
					response.write(stdout);
					return true;
				});
			}
	}
};

module.exports = {
	"path": "/exams",
	"media": { "application/json": json }
};
