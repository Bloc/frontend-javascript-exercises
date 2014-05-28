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

  it("should be defined", function() {
    expect(challenge.createCourse).to.exist;
  });

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

  it("should be defined", function() {
    expect(challenge.addProperty).to.exist;
  });

  it("adds a property to an existing object", function() {
    expect(challenge.addProperty(teacher, 'favoriteStudent', 'Mark')).to.eql(teacherWithFavoriteStudent);
  });

  it("should return the object when a property exists", function() {
    expect(challenge.addProperty(teacherWithFavoriteStudent, 'favoriteStudent', 'James')).to.eql(teacherWithFavoriteStudent);
  });
});

describe("formLetter", function() {
  var letter = {
  	recipient: "David",
  	msg: "What up, thug?",
  	sender: "Arnold"
  };
  var letterStr = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;

  it("should be defined", function() {
    expect(challenge.formLetter).to.exist;
  });

  it("should return a properly formatted letter", function() {
  	expect(challenge.formLetter(letter)).to.eql(letterStr);
  });
});

describe("canIGet", function() {
  it("should be defined", function() {
    expect(challenge.canIGet).to.exist;
  });

  it("returns the correct results for MacBook Air", function() {
    expect(challenge.canIGet("MacBook Air", 999)).to.be.true;
    expect(challenge.canIGet("MacBook Air", 1000)).to.be.true;
    expect(challenge.canIGet("MacBook Air", 998)).to.be.false;
  });

  it("returns the correct results for MacBook Pro", function() {
    expect(challenge.canIGet("MacBook Pro", 1299)).to.be.true;
    expect(challenge.canIGet("MacBook Pro", 1300)).to.be.true;
    expect(challenge.canIGet("MacBook Pro", 1298)).to.be.false;
  });

  it("returns the correct results for Mac Pro", function() {
    expect(challenge.canIGet("Mac Pro", 2499)).to.be.true;
    expect(challenge.canIGet("Mac Pro", 2500)).to.be.true;
    expect(challenge.canIGet("Mac Pro", 2498)).to.be.false;
  });

  it("returns correct results for Apple Sticker", function() {
    expect(challenge.canIGet("Apple Sticker", 1)).to.be.true;
    expect(challenge.canIGet("Apple Sticker", 2)).to.be.true;
    expect(challenge.canIGet("Apple Sticker", 0)).to.be.false;
  });

  it("returns false for non-Apple products", function() {
    expect(challenge.canIGet("Dell", 1000000)).to.be.false;
    expect(challenge.canIGet("Windows", 10000000)).to.be.false;
    expect(challenge.canIGet("Snapple", 10000000)).to.be.false;
  });
});
