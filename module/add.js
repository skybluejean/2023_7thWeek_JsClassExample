//calc.js의 부품
//자식

const numberChecker = require("./number-checker.js");

module.exports = 
  function(first,second){
    if(numberChecker(first) === true){
      return first + second;
    }
   // return first + second;
  }

//add.js는 객체이다.

/*
function add(first,second){
  return first + second;
}
*/