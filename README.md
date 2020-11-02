# Overview

This is a code-along with Mosh's [Object-Oriented Programming](https://codewithmosh.com/p/object-oriented-programming-in-javascript) course. Below are some notes taken along the way.

### Objects

- Constructor property: 
Every object has a `constructor` property, and that references the function that was used to create that object.
```js
// constructor
new String() // same as string literals: '', "", ``
new Boolean() // same as boolean literals: true, false
```

- Functions are objects:
When we create a `new` operator, the operator will internally create an empty object, and pass that as the first argument in the `call` method. This object will determine the context for `this`.
If you don't use the `new` operator, `this` keyword will refer to the **global** object.
```js
// the following...
const anotherCircle = new Circle(2)
// ...is the same as:
Circle.call({}, 2)
```

- Value vs. Reference Types:
What will the following console log?
```js
let num = 10
function increase(num) {
  num++
  // the number passed in here is copied by VALUE, 
  // i.e. it's INDEPENDENT from the variable above
  // the parameter is LOCAL in this function
  // the increased number (11) will go out of scope when we exit this function
}
increase(num)
console.log(num) // -> 10
```