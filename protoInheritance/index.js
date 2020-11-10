/*** practice Polymorphism ***/
function HtmlImageElement(src) {
  this.src = src
  this.render = function() {
    return `<img src="${this.src}" />`
  }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

/*** practice Prototypical Inheritance ***/
function HtmlElement() {
  this.click = function() {
    console.log('clicked')
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focused')
}

function HtmlSelectElement(items = []) {
  this.items = itmes

  this.addItem = function(item) {
    this.items.push(item)
  }

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  this.render = function() {
    return `
      <select>${this.itmes.map(item => `<option>${item}</option>`).join('')}
      </select>
    `
  }
}

HtmlSelectElement.prototype = new HtmlElement()


/*** mixins ***/
function mixin(target, ...sources) {
  Object.assign(target, ...sources)
}

const canEat = {
  eat: function() {
    this.hunger--
    console.log('eating')
  }
}

const canWalk = {
  walk: function() {
    console.log('walking')
  }
}

const canSwim = {
  swim: function() {
    console.log('🐠')
  }
}

function Person() {

}

mixin(Person.prototype, canEat, canWalk)
const person = new Person()
// console.log(person)

function Goldfish() {

}

mixin(Goldfish.prototype, canEat, canSwim)
const goldFish = new Goldfish()

// when resetting the prototype, remember to reset the constructor as well
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}

function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function() {
  console.log('duplicating')
}

function Circle(radius, color) {
  Shape.call(this, color)
  this.radius = radius
}

Circle.prototype.draw = function() {
  console.log('drawing')
}

extend(Circle, Shape)

function Square(size) {
  this.size = size
}

// the following is extracted to `extend` function
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square
extend(Square, Shape)