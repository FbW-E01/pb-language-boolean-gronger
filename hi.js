/* #### 1. What type? 
* Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
**Questions: Comment your answers in the js file.** 
* Is there a difference? Why/why not? 
* Which comparison operator should we generally use? Why?
* What would happen if we were to use `=`? */

console.log(3 == "3");
console.log(3 === "3");

// The loose comparison operator is more forgiving and accepts strings as if they were numbers. The strict operator only accepts comparisons that are completely the same as being true.

// We generally use the strict operator, so that we can be more exact with our code and because it is considered best practice. 

// If we were to use =, we would be assigning variables, not comparing.

/* #### 2. Not
 * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable. */

const kartoffel = true;
const strawberry = kartoffel == "strawberry" ? true : false;
console.log(strawberry);

// COnfuSeD ---- Did i do this right ????


/* #### 3. Short Circuit
 Given the code below, what will print when when we console log `name`? Comment your answer in the js file. */

// ```javascript
// let firstName, givenName;

// firstName = 'Stacey';
// let name = givenName || firstName || 'John'; 

// console.log(name);
// ```

// Stacey will be printed !!!!!!!!!!!!!!!!