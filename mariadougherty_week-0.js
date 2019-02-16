// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
console.log(mantra.charAt(0));

// 2. Write the code that determines if there is a 'x' in mantra.
console.log(mantra.includes("x"));

// 3. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes("v"));

// Stretch: Write the code that returns the position of 'v' in mantra.
console.log(mantra.indexOf("v"));

// Consider the following statement:

var codingIsEasy = true;
var imBored = true;

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = false;
var imFrustrated = false;

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
for(let i = 0; i < mantra.length; i++){
    console.log(mantra[i]);
}

// Stretch: Using a while loop.
var i = 0;
while(i < mantra.length){
    console.log(mantra[i]);
    i++;
}

// Super Stretch: Using forEach().

var newArr = mantra.split("")
newArr.forEach(function(element){
    console.log(element);
})

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
function withoutVowels(str){
    var newMessage = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u"){
            newMessage.push(str[i]);
        }
    }
    console.log(newMessage.join(""));
}
withoutVowels(message);
// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
function returnCats(toonArray){
    var catArray = [];
    for(let i = 0; i < toonArray.length; i++){
        if(toonArray[i].animal === "cat"){
            catArray.push(toonArray[i]);
        }
    }
    return catArray;
}

console.log(returnCats(toonimals));
