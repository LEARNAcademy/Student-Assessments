# Week 1 Assessment

### Without using Google answer the following:

1.List the data types in Javascript. Indicate which are primitives.
    Primitives: number, boolean, null, undefined, symbol, strings
    Non-primitives: objects
2.What's the difference between =, ==, and === in JavaScript?
    = is when you are assigning a value
    == is when you compare values, it is not restrained by the types being compared
    === is when you compare values and enforce that they are the type
3.What is the difference between an array's index and length?
    index: the location of a specific element within the array
    length: the number of elements in the array
4.What are the three parts of a for loop?
    for (let i = 0; i < str.length, i++):  the first part is the starting value of the loop, the second part is the end condition of the loop, the third part is what changes between each iteration of the loop
5.What is a function's declaration, argument, and call?
    declaration: when the function is created to be used in the future
    argument: the value(s) being passed into the function
    call: when the function is used by another piece of code, potentially being given some data to use
6.What are the three main steps in saving work to github?
    add the work to git, commit the changed work to git, push the committed work to GitHub
7.What is the terminal command to move directories?
    mv to move a directory
8.Do you have a suggestion for a Check In question?
    Most impressive binge-watch
9.What was your favorite topic this week?
    higher-order function
10.What was your "A-ha!" moment this week?
    understanding how higher-order functions can be modified to customize the results

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
The console will show "undefined" because the var declaration of "text" inside the function will be hoisted to the top of the function and will have its undefined value logged.

2. What is JSON? How does it relate to javascript objects?
    JSON is a format for storing and transporting data.  The format is syntactically identical to the code for creating JavaScript objects.
3. Describe a closure, what is it good for and how do you recognize one?
    A closure is the combination of a function and the environment the function was declared in.  It is recognizable by looking at where every function ends.
