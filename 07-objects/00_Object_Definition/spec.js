var expect    = require("chai").expect;
var challenge = require("./challenge.js");
var _ = require('underscore');


describe("createCourse", function() {
  var title = "Full Stack Engineering",
      duration = "4 weeks",
      students = ["Rob", "Tim", "Joe"];

  var course = {
    title: title,
    duration: duration,
    students: students
  };

  it("creates a course with a title, duration and student list", function() {
    expect(challenge.createCourse(title, duration, students)).to.eql(course);
  });
});



describe("addProperty", function() {
  var teacher = null,
      teacherWithFavoriteStudent = null;
  beforeEach(function() {
    teacher = {subject: 'Algebra 2', school: 'Berkeley High School'};
    teacherWithFavoriteStudent = _.clone(teacher);
    teacherWithFavoriteStudent.favoriteStudent = 'Mark';
  });

  it("adds a property to an existing object", function() {
    expect(challenge.addProperty(teacher, 'favoriteStudent', 'Mark')).to.eql(teacherWithFavoriteStudent);
  });

  it("sould return the object when a property exists", function() {
    expect(challenge.addProperty(teacherWithFavoriteStudent, 'favoriteStudent', 'James')).to.eql(teacherWithFavoriteStudent);
  });
});
