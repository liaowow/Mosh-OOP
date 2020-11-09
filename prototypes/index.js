/*** Iterating Instance Members vs. Prototype Members ***/
function Circle(radius) {
  this.radius = radius

  this.move = function() {
    console.log('moving')
  }
}

Circle.prototype.draw = function() {
  console.log('drawing')
}

const c11 = new Circle(1)
// `Object.keys` returns instance members
console.log(Object.keys(c11))

// for loop returns all members (instance/ownProperty + prototype)
for (let key in c11) console.log(key)

/*** Prototype vs. Instance Members ***/

function Circle(radius) {
  // Instance Members
  this.radius = radius

  this.move = function() {
    console.log('moving')
  }
}

// Prototype Members
Circle.prototype.draw = function() {
  console.log('drawing')
}

const c1 = new Circle(1)
const c2 = new Circle(1)

Circle.prototype.toString = function() {
  return `Circle with radius ${this.radius}`
}

/*** Exploring Property Descriptors && Constructor Prototypes ***/

let person = { name: 'Annie' }

// to define the getter and setter for a property
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
})

delete person.name
// console.log(person)

// let objectBase = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// console.log(descriptor)

// for (let key in person)
//   console.log(key)