var expect    = require("chai").expect;
var challenge = require("./challenge.js");

var course = {
	name: "Full Stack Engineering",
	duration: "4 weeks",
	students: ["Rob", "Tim", "Joe"]
};

var courseWithNoStudents = {
	name: "Full Stack Engineering",
	duration: "4 weeks",
	students: []
};

describe("dropStudentFromCourse", function() {
	it("drops a student from our course object when students.length > 0", function() {
		expect(challenge.dropStudentFromCourse(course, 1)).to.equal({
			name: "Full Stack Engineering",
			duration: "4 weeks",
			students: ["Rob", "Joe"]
		});
	});

	it("tells us there are no students when students.length === 0", function() {
		expect(challenge.dropStudentFromCourse(courseWithNoStudents, 0)).to.equal({
			name: "Full Stack Engineering",
			duration: "4 weeks",
			students: "No students enrolled."
		});
	});
});