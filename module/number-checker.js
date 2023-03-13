module.exports = function(data){
  if(typeof(data) === "number"){
    return true;
  }else{
    console.error("This is not Number");
    return false;
  }
}