module.exports.getKeys = function(object) {
  output = [];
  for (var k in object) {
    output.push(k);
  }
  return output;
}

module.exports.getValues = function(object) {
  output = [];
  for (var k in object) {
    output.push(object[k]);
  }
  return output;
}

module.exports.objectToArray = function(object) {
  output = [];
  for (k in object) {
    output.push(k + " is " + object[k]);
  }
  return output;
};