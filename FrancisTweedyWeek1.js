// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
const threeDiv = (num) => {
	if (typeof(num) === "number"){
		if (num % 3 === 0){
			return (`${num} is divisible by three`)
		} else{
			return (`${num} is not divisible by three`)
		}
	} else {
		return "Bad input"
	}
}
console.log(threeDiv(3))


// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
const helloMe = {
	first_name: "Francis",
	last_name: "Tweedy",
	height: 6,
	glasses: "yes"
}
const info = (str) => {
	return (`Hi everyone!  I am ${str.first_name} ${str.last_name}, I am ${str.height}ft tall and ${str.glasses}, I wear glasses.`)
}
console.log(info(helloMe))


// 3. 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
let items = ["milk", "banana", "yogurt", "chicken", "apple"]
const grocery = (str) => {
	let middle = str[Math.floor(str.length / 2)]
	return `I like to drink ${str[0]} whenever I eat ${middle} and ${str[str.length-1]}s`
}
console.log(grocery(items))


// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
const alphabetSoup = (str) => {
    // your code goes here
	var result = str.split("").sort().join("");
	return result;
}
let word = 'learn';
console.log(alphabetSoup(word))


// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
var nums = [9, 5, 88, 2, 5, 42, 57]
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
const together = (num, things) =>{
	var result = [];
	if (num.length <= things.length){
		for (let i = 0; i < num.length; i++){
			result.push(num[i] + " " + things[i])
		}
	} else {
		for (let i = 0; i < things.length; i++){
			result.push(num[i] + " " + things[i])
		}
	}
	return result;
}
console.log(together(nums, nouns));


// 6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
let arrayMult = [1, 2, 3, 4, 5]
const mult = arrayMult.map(input => {
	return input * 5
})
console.log(mult)
