// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  var classBody = document.body;
  function grab (Body) {
    if (Body.classList && Body.classList.contains(className)) {
      result.push(Body);   
    }
    if (Body.childNodes) {
    for (var i = 0; i < Body.childNodes.length; i++) {
      grab(Body.childNodes[i]);
    }
    }
  }
  grab(classBody);
  return result;
};
