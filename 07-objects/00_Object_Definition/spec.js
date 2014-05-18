var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("createCourse", function() {
	it("creates a course with a title, duration and student list", function() {
		name = "Full Stack Engineering";
		duration = "4 weeks";
		students = ["Rob", "Tim", "Joe"];
		expect(challenge.createCourse(name, duration, students)).to.equal({
			name: "Full Stack Engineering",
			duration: "4 weeks",
			students: ["Rob", "Tim", "Joe"]
		});
	});
});