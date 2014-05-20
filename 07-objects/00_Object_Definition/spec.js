var expect    = require("chai").expect;
var challenge = require("./challenge.js");

var course = {
  title: "Full Stack Engineering",
  duration: "4 weeks",
  students: ["Rob", "Tim", "Joe"]
};

var title = "Full Stack Engineering",
    duration = "4 weeks",
    students = ["Rob", "Tim", "Joe"];

describe("createCourse", function() {
  it("creates a course with a title, duration and student list", function() {
    expect(challenge.createCourse(title, duration, students)).to.equal(course);
  });
});

var teacher = {subject: 'Algebra 2', school: 'Berkeley High School'};

var teacherWithProp = {subject: 'Algebra 2', school: 'Berkeley High School', favoriteStudent: 'Mark'};

describe("addProperty", function() {
  it("adds a property to an existing object", function() {
    expect(challenge.addProperty(teacher, 'favoriteStudent', 'Mark')).to.equal({
      subject: 'Algebra 2',
      school: 'Berkeley High School',
      favoriteStudent: 'Mark'
    });
  });

  it("sould notify us when a property already exists", function() {
    expect(challenge.addProperty(teacherWithProp, 'favoriteStudent', 'Mark')).to.equal({
      console.log("Property already exists.");
    });
  });
});