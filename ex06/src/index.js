// Create lion object here
var lion = {

    name: "Simba",
    legs: 4,
    tails: 1
};
let roar = lion
// end of lion object

function myFunction(roar, roar2){ // Change this line

    // Only change code below this line
    lion["roar"] = "roar-roar";

return lion;
};

// Only change code above this line
console.log(myFunction(roar)); // Change this line
module.exports = myFunction;