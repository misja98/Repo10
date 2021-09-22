// Create school object here
var school = {

    name: "Arena",
    location: "Sarajevo",
    established: 2020
};
// end of school object

function myFunction(name){
// Only change code below this line
var name = "Paragon";
school.name = name;
return school;
};

// Only change code above this line
console.log(myFunction()); // Change this line
module.exports = { school, myFunction };