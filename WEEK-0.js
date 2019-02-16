// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

function returnB(word) {
    return word.substr(0,1)
}

console.log(returnB(mantra))

// 2. Write the code that determines if there is a 'x' in mantra.

function isThere(word) {
    return word.includes("x")
}


console.log(isThere(mantra))

// 3. Write the code that determines if there is a 'v' in mantra.

function isThere2(word) {
    return word.includes("v")
}

console.log(isThere2(mantra))


// Stretch: Write the code that returns the position of 'v' in mantra.

var placeForV = []

for(var i = 0; i < mantra.length; i++) {
    if (mantra[i] === "v") {
        placeForV.push(i);
    }
}

console.log(placeForV)


// Consider the following statement:

var codingIsEasy = 1
var imBored = 1

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost
var imFrustrated

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
//Answer you can leave them as is.


// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

// for(var i = 0; i < mantra.length; i++) {
//     console.log(mantra[i])
// }


// Stretch: Using a while loop.

// var i = 0
// while (i < mantra.length) {
//     console.log(mantra[i]);
//     i++
// }

// Super Stretch: Using forEach().


function conLog() {
    console.log(mantra)
}

function beTheDev(arr) {
    newArr = [arr]
    return newArr.forEach(conLog)
}

console.log(beTheDev(mantra))






// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
function vowel(word) {

var newMessage = []
for(var i = 0; i < word.length; i++) {
    if (word[i] !== 'a' && word[i] !==  'e' && word[i] !==  'i' && word[i] !==  'o' && word[i] !==  'u') {
        newMessage.push(word[i])
    }

}
console.log(newMessage.join(''))
}
vowel(message)



// Stretch: Update your function to throw an exception if the argument is not a string.


// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.


function returnCats(toonArray) {
newToons = []
    for(i = 0; i < toonArray.length; i++) {
        if (toonArray[i].animal === "cat") {
            newToons.push(toonArray[i])
        }
    }
return newToons
}

console.log(returnCats(toonimals))
