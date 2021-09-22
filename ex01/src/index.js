// Only change code below this line
var myPet  = {
    species: "dog",
    name: "chilli",
    legs: 4,
    friends: ["Dan", "Van"]
};

let myObj = myPet;

function myFunction (myObj){
    return myObj;
}

// Only change code above this line
console.log(myFunction(myObj)); // Change this line
module.exports = { myPet, myFunction }