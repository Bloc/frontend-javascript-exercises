// TODO: write the `createCourse` function
// createCourse should:
//    - take three arguments that will define our courses properties
//      - title (string), duration (string like '4 weeks'), students (an array of 3 student names)
//    - return an object that has each property assigned it's proper value
// 
// Ex. createCourse('Bloc Front-End Engineering', '4 weeks', ['Joe', 'Tim', 'Rob'])
// should return {title: 'Bloc Front-End Engineering', duration: '4 weeks', students: ['Joe', 'Tim', 'Rob']}
module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return course;
};

// TODO: write a function called addProperty
// addProp should:
//    - take three arguments: an object to add a property to, a property name and its value
//    - if the property is defined, the function should console.log "property already exists"
//    - hasOwnProperty method can check if you pass string of property
//    - return the new object
// Ex. var student = {school: 'Berkeley High School', lastName: 'Smith'};
// addProperty(student, 'firstName', 'Jim') should return 
// {school: 'Berkeley High School', lastName: 'Smith', firstName: 'Jim'}
module.exports.addProperty = function(object, newProp, newValue) {
  if (object.newProp) {
    console.log("Property already exists.");
  } else {
    object[newProp] = newValue;
    return object;
  }
};