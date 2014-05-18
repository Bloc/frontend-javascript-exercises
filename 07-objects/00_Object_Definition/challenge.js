// TODO: write the `createCourse` function
// createCourse should:
// 		- take three arguments that will define our courses properties
//				- title (string), duration (string like '4 weeks'), students (an array of 3 student names)
//		- return an object that has each property assigned it's proper value
// 
// Ex. createCourse('Bloc Front-End Engineering', '4 weeks', ['Joe', 'Tim', 'Rob'])
// should return {title: 'Bloc Front-End Engineering', duration: '4 weeks', students: ['Joe', 'Tim', 'Rob']}
module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
	var course = {
		title: courseTitle,
		duration: courseDuration,
		students: courseStudents
	};
	return course;
};