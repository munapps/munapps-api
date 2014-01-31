"use strict";

var MUN = require("MUN");

module.exports = {
	"path": "/academic-record",
	"handlers": {
		"get": function get(request, response) {
			var a = request.authentication;
			return MUN.selfService.academicRecord(a.username, a.password)
			.then(function (result) {
				var stdout = result[0];
				response.write(stdout);
				return true;
			});
		}
	}
};
