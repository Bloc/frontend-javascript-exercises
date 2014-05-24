module.exports.newArray = function(a,b,c,d) {   
  return [a,b,c,d];
};

module.exports.firstAndLast = function(a) {
  var lastIndex = a.length - 1;
  return [a[0],a[lastIndex]]; 
};