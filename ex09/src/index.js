function myFunction(myObj, checkProp){
    // Only change code below this line
    var myObj = {
        title: "Titanic", 
        song: "My Heart Will Go On", 
        genre: "drama"
    }
if(myObj.hasOwnProperty("checkProp")){
    return myObj(checkProp);
}
return "Not Found";
    // Only change code above this line
}
module.exports = myFunction;