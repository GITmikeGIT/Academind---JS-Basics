var path = require('path');
console.log(path.basename(__filename));

/** Prototypes */
var prototype = {};

var person = Object.create(prototype);
person.name = 'Max';
person.age = 27;

prototype.greet = function() {
  console.log('Hello there!');
};
person.greet();

/**
 * Prototype chains
 * object > object's prototype > object prototype's prototype and so on
 */

/** Prototypes in Action */
var prototype = {};

var person = Object.create(prototype);
person.name = 'Max';
person.age = 27;

prototype.greet = function() {
  console.log(`Hello there, I am ${this.name}!`);
};

var max = Object.create(person);
var anna = Object.create(person);

max.greet();
anna.greet();

/** Summary */

console.log(anna.__proto__.__proto__ == prototype);
console.log(anna.__proto__ == person);
console.log(person.__proto__ == prototype);

console.log(Object.getPrototypeOf(anna) == person);
