// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var result = [];
  
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
    return String(obj);
  }else if(Array.isArray(obj)){
    if(obj[0] === undefined){
      return '[]';
    } else {
      obj.forEach(v => {
        result.push(stringifyJSON(v));
      })
      return '[' + result.join(',') + ']';
    }
  }else if(typeof obj === 'string'){
    return '"' + obj + '"';
  }else if(typeof obj === 'object'){
    if(Object.keys(obj) === undefined){
      return '{}'
    }else{
      for(let key in obj){
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    return '{' + result.join(',') + '}';
  }
};
