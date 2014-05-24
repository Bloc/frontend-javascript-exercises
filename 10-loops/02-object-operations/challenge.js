module.exports.copy = function(src) {
  var dest = {};
  for (k in src) {
    dest[k] = src[k];
  }
  return dest;
};

module.exports.extend = function(dest, src) {
  for (k in src) {
    dest[k] = src[k];
  }
  return dest;
};

module.exports.hasElems = function(dict, elems) {
  for (var i = 0; i < elems.length; i++) {
    if (dict[elems[i]] === undefined) {
      return false;
    }
  }
  return true;
};