/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name,age) {
this.name = name;
this.age = age;
this.stomach = [];
}
Person.prototype = {
  constructor: Person,
  eat: function(somefood){
    if (this.stomach.length < 10){
      this.stomach.push(somefood);
    }
  },
  poop : function(){
    this.stomach = [];
  },
  toString: function(){
    return `${this.name}, ${this.age}`
  }
}
let human = new Person('jack', 21)
human.eat('burgers');
human.eat('pizza');
//console.log(human);
human.poop();
//console.log(human);
//console.log(human.toString())
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model,milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype={
  constructor: Car,
  fill: function(gallons){
   return  this.tank = this.tank + gallons; 
  },
  drive(distance){
    let drivenGallons = distance/this.milesPerGallon;
    if(this.tank > drivenGallons){
      this.tank -=drivenGallons;
      this.odometer +=distance;
    } else {
       let theDiffrenceGallons = drivenGallons - this.tank
       let unDrivenDistance = this.milesPerGallon * theDiffrenceGallons;
       let drivenDistance = distance -unDrivenDistance;
       this.tank = 0;
       this.odometer += drivenDistance
       return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}

// let mycar = new Car('Hyundai', 25);
// mycar.fill(10);
// console.log(mycar);
// console.log(mycar.drive(2));
// console.log(mycar);

// console.log(mycar.drive())

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age, favoriteToy);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Person.prototype;
Baby.prototype.play = function(){
  return `playing with ${this.favoriteToy}`
}
// let child = new Baby('johny', 4, 'legos');
// console.log(child)
// child.eat('pizza');
// console.log(child.play());
// console.log(child);

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. the key word this could mean several things it does not matter where it is declared but its more important the location where its called.
  2. when using the key word new this inside the function will refer to the object that will be made using the new constructor speacial key.
  3. if the function is called using call or apply or bind this also woll have a different meaning 
  4. when you run this in the global scope you will get the window object which is where this was called same principle appies with functions its where you call your this that counts not where you declare it;
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
