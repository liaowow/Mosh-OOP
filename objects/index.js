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

// Constructor function
function Circle(radius) {
  this.radius = radius
  this.draw = function() {
    console.log('drawing in constructor')
  }
}

const anotherCircle = Circle(2)
