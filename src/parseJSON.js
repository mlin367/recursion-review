// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  let charArr = json.split('');
  
  function getNextChar(){
    let nextChar = charArr.shift();
    if(nextChar === ' ' || nextChar === ','){
      return getNextChar();
    }else{
      return nextChar;
    }
  }

  function array(elements){
    // if(elements === undefined){
    //   return [];
    // }else{
      return [elements];

  }

  function string(char){
  }

  function object(members){
    
  }

  function number(char){
    return Number(char);
  }

  function boolean(){}


  function cases(nextChar){
    if(nextChar === '['){
      let arr = [];
      for(let i = 0; i < charArr.indexOf(']'); i++){
        arr.push(cases(getNextChar()));
      }
      return arr;
    }else if(!isNaN(nextChar)){
      return number(nextChar)
    }
  }
 
  return cases(getNextChar());


  
};
