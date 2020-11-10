// ES6 Class Declaration
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  // instance method
  draw() {
    console.log('drawing')
  }

  // static method -- a utility method not tied to a particular object
  static parse(str) {
    const radius = JSON.parse(str).radius
    return new Circle(radius)
  }
}

const c = Circle.parse('{ "radius": 1 }')
console.log(c)

// function Circle(radius) {
//   this.radius = radius
//   this.draw = function() {
//     console.log('drawing')
//   }
// }