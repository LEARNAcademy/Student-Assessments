// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

var firstLetter = mantra.charAt(0)

console.log(firstLetter)



// 2. Write the code that determines if there is a 'x' in mantra.

var letterX = mantra.includes("x")

console.log(letterX)



// 3. Write the code that determines if there is a 'v' in mantra.

var letterV = mantra.includes("v")

console.log(letterV)

// Stretch: Write the code that returns the position of 'v' in mantra.

var letterPosition = mantra.indexOf("v")

console.log(letterPosition)



// Consider the following statement:

// var codingIsEasy
// var imBored
//
// if (codingIsEasy && imBored) {
//     console.log("I need more!")
// } else {
//     console.log("Steady as she goes")
// }


// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

var codingIsEasy = "yes"
var imBored = "yes"

if (codingIsEasy === "yes" && imBored === "yes") {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}




// Consider the following statement:

// var imLost
// var imFrustrated
//
// if (imLost || imFrustrated) {
//     console.log('Break time!')
// } else {
//     console.log('Keep coding!')
// }


// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}



// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

var mantra = "Be the dev"

for (var i = 0; i < mantra.length; i++) {
  console.log(mantra[i])
}


// Stretch: Using a while loop.

var mantra = "Be The Dev"
var sentence = ""
var i = 0;
while (i < mantra.length) {
  sentence += mantra[i];
  i++;
}
console.log(sentence)


// Super Stretch: Using forEach().

ar mantra = "Be The Dev"
var sentenceTwo = ""
mantra.split("").forEach(function(letter) {
  sentenceTwo += letter
})
console.log(sentenceTwo)



// Consider the following variable:

var message = "thisisateststring"



// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

var message = "thisisateststring"

var noVowel = message.replace(/[aeiou]/ig, '')

console.log(noVowel)


// Stretch: Update your function to throw an exception if the argument is not a string.

var message = "thisisateststring"

if(typeof message !== "string") {
  console.log("This is not a string.")
} else {
  var noVowel = message.replace(/[aeiou]/ig, '')

  console.log(noVowel)
}


// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

//I KNOW THIS ISN'T CORRECT BUT I COULD NOT FIGURE IT OUT??

var message = 0

if(typeof message !== "string") {
  console.log("TypeError")
} else {
  var noVowel = message.replace(/[aeiou]/ig, '')

  console.log(noVowel)
}


// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

function findCats(toonArray) {
  var newArray = []
  for(let i=0; i < toonArray.length; i++) {
      if(toonArray[i].animal === "cat") {
      newArray.push(toonArray[i])
  }
}
  return newArray
}

console.log(findCats(toonimals))
