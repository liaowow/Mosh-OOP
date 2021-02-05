# Overview

This is a code-along with Mosh's [Object-Oriented Programming](https://codewithmosh.com/p/object-oriented-programming-in-javascript) and [Git](https://codewithmosh.com/courses/1120640) courses. Below are some notes taken along the way.

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

### What and Why of OOP
- Define: OOP is a programming model that is based on `objects` rather than functions and logic
- Detail: A program is divided into collections of code called *objects* that contain both data and methods. These methods give objects the ability to interact with each other and access/manipulate data.
- Reasons:
  - Modularity
  - Efficient problem-solving
  - Code reuse
- Resource: 
  - [MDN Documentation on OOP](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
  - [Jason Humphrey's Coding Career Fastlane](https://codingcareerfastlane.com/free-content/?utm_source=ActiveCampaign&utm_medium=email&utm_content=OOP+interview+questions+deep+dive&utm_campaign=oop+Interview+questions)

### Git
- Branching
  - What is a branch?
    - Just a pointer to a commit
  - To switch branches: `git switch {branch-name}` (more modern than `git checkout`)
  - `HEAD` vs. `master` (via [stackOverflow](https://stackoverflow.com/questions/4386959/difference-between-head-and-master/32765225#:~:text=The%20simple%20answer%20is%20that,cannot%20delete%20the%20HEAD%20pointer.)):
    - `HEAD` is a pointer/label to the most recent commit of the branch you are currently on
    - `master` is the default branch created when you initialized a git repository (e.g. `git init`)
    - You can delete the `master` branch (e.g. `git branch -D master`). You cannot delete the `HEAD` pointer.
  - Stashing: storing code changes in a temporary safe place
  - Merging:
    - Fast-forward merges (if branches have not diverged)
    - 3-way merges (if branches have diverged)
    - [Resolving merge conflicts](https://dev.to/cookrdan/conflict-resolution-git-merge-practice-3iab)
- Resource:
  - [Git Documentation](https://git-scm.com/docs)
  - [`git bisect`](https://www.metaltoad.com/blog/beginners-guide-git-bisect-process-elimination)