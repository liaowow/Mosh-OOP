/*** ES6: private properties using WeakMaps ***/
const _radiusMap = new WeakMap()
const _moveMap = new WeakMap()
class Circle {
  constructor(radius) {
    _radiusMap.set(this, radius)
    _moveMap.set(this, function() {
      console.log('moving', this)
    })
  }

  draw() {
    _radiusMap.get(this)
  }

}

/*** ES6: private properties using symbol ***/
const _radius = Symbol()
const _draw = Symbol()
class Circle {
  constructor(radius) {
    this[_radius] = radius
  }

  [_draw]() {
    // ...some private function 
  }
}

/*** ES6 `this` keyword ***/
const CircleThis = function() {
  this.draw = function() { console.log(this) }
}

const c = new Circle()
// Method Call -- we are calling the method on an object (in this case: `this` will point to c)
c.draw()

const draw = c.draw
// Function Call -- we are calling it as a standalone function
draw()

/*** ES6 Class and Static Method ***/
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

// const c = Circle.parse('{ "radius": 1 }')
// console.log(c)

/* before ES6... */
// function Circle(radius) {
//   this.radius = radius
//   this.draw = function() {
//     console.log('drawing')
//   }
// }