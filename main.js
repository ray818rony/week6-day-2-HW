// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:

var person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (var item in person3) {
    console.log(`${item}: ${person3[item]}`)
    };


    // 2nd Methode, trying to show the Shakes object
console.log(Object.values(person3));

//*******************************************************************************

/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function printInfo(name,age){
    this.name = name;
    this.age = age;
}


printInfo.prototype.active = function(){
    console.log(this.name, `is ${self.age} years old`)
}

let personOne = new printInfo("Jack", 35);
let personTwo = new printInfo("Andrew", 29 )

console.log(personOne)
console.log(personTwo)

// Use an arrow to create the printInfo method
let print2 = printInfo(name2,age) =>{ 
    this.name2 = name2;
    this.age = age;
}

//Question 2 is not completed due to syntax issues.


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age


//***************************************************************************** */


// Create a Promised based function that will check a string to determine if it's length is greater than 10.
// If the length is greater than ten console log "Big word". 
// If the length of the string is less than 10 console log "Small Number"
// 

const stringChecker = (string) => {
    return new Promise((resolve, reject) => {
        if (string.count > 10) {
            big = console.log('That is a big word' )
        } if (string.count<10) {
            small = console.log('that is a small word' )
        }
    })
}

// Using a JS Promise
stringChecker("aasdads")
