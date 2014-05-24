module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
  if (object[newProp] === undefined) {
    object[newProp] = newValue;
  }
  return object;
};

module.exports.formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item, money) {
  var items = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  };

  price = items[item]
  return (price !== undefined && money >= price);
};