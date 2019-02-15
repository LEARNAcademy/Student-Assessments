// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
function getB(str){
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === 'B'){
            return str.charAt(i);
        }
    }
}
console.log(getB(mantra));

// 2. Write the code that determines if there is a 'x' in mantra.
function findX(str){
    if (str.includes('x')){
        return 'String contains x';
    } else {
        return 'String does not contain x';
    }
}
console.log(findX(mantra));

// 3. Write the code that determines if there is a 'v' in mantra.
function findV(str){
    if (str.includes('v')){
        return 'String contains v';
    } else {
        return 'String does not contain v';
    }
}
console.log(findV(mantra));

// Stretch: Write the code that returns the position of 'v' in mantra.
function posV(str){
    if (str.includes('v')){
        return str.indexOf('v');
    } else {
        return 'String does not contain v';
    }
}
console.log(posV(mantra));

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
for (let i = 0; i < mantra.length; i++){
    console.log(mantra.charAt(i));
}

// Stretch: Using a while loop.
let whileCounter = 0;
while (whileCounter < mantra.length){
    console.log(mantra.charAt(whileCounter));
    whileCounter++;
}

//Super Stretch: Using forEach().
var mantraArr = mantra.split("");
console.log(mantraArr)
mantraArr.forEach(function(s){
    console.log(s);
});

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
function noVowels(str){
    return str.replace(/[aeiou]/gi, '');
}
console.log(noVowels(message));

// Stretch: Update your function to throw an exception if the argument is not a string.
var check = 2;
function noVowelsStretch(str){
    if (typeof(str) === "string"){
        return str.replace(/[aeiou]/gi, '');
    } else {
        throw TypeError("Argument is not a string");
    }
}
//console.log(noVowelsStretch(check));

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
function cats(arr){
    var result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].animal === 'cat'){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(cats(toonimals));
