// TODO: write the dropStudentFromCourse Function
// dropStudentFromCourse should:
// 		- take two arguments
// 			- first is a course object like the one we created in the last challenge
//			- second is the index of the student we want to drop
//		- return our new course object
//		- if there are no students left in the array, it should return the string "No students enrolled."
// 			instead of an empty array
// Ex.
// var course = {
// 	title: "Algebra 2",
// 	duration: "One semester",
// 	students: ["Sherry", "Mark", "Dominic"]
// };
// dropStudentFromCourse(course, 1) should return
// {title: "Algebra 2", duration: "One semester", students: ["Sherry", "Dominic"]}

var course = {
	title: "Algebra 2",
	duration: "One semester",
	students: ["Sherry", "Mark", "Dominic"]
};

module.exports.dropStudentFromCourse = function(course, studentNum) {
	if (course.students.length === 0) {
		course.students = "No students enrolled.";
	} else {
		course.students.splice(studentNum, 1);
	}
	return course;
}

