"use strict";
module.exports = function (grunt) {
	// Start w/ a clean slate
	grunt.initConfig({});

	// JSHint
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.config("jshint", {
		"options": {"jshintrc": true},
		"all": ["*.js", "routes/*.js"]
	});

	// Default task
	grunt.registerTask("default", "Does nothing", function () { /* Does nothing */ });
	// Aliases
	grunt.registerTask("hint", ["jshint"]);
	grunt.registerTask("lint", ["jshint"]);
};
