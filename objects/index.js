// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('drawing')
    }
  }
  
}

const circle = createCircle(1)
circle.draw()

// Constructor function: function that is used to create the object
function Circle(radius) {
  this.radius = radius
  this.draw = function() {
    console.log('drawing in constructor')
  }
}

const anotherCircle = new Circle(2) // -> same as `Circle.call({}, 2)`

// Functions are Objects!
const circleFunc = new Function('radius', `
  this.radius = radius
  this.draw = function() {
    console.log('drawing in constructor')
  }
`)
const circle3 = new circleFunc(3)

// Getters and Setters
function CircleGetSet(radius) {
  this.radius = radius
  let defaultLocation = { x: 1, y: 2 }
  
  this.draw = function() {
    console.log('drawing in constructor')
  }

  this.getDefaultLocation = function() {
    return defaultLocation
  }

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error('Invalid location.')
      defaultLocation = value
    }
  })
}

const circle4 = new CircleGetSet(4)

