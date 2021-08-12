var path = require('path');
console.log(path.basename(__filename));

/** Objects summary */
/* Create object "inline" */
var person = {
  name: 'Max',
  age: 27
};
console.log(person instanceof Object);

/* Create object via new Object */
var person = new Object();
person.name = 'Max';
person.age = 27;
console.log(person instanceof Object);

/* Create object via Object.create(null) - without prototype */
var person = Object.create(null);
person.name = 'Max';
person.age = 27;

console.log(Object.getPrototypeOf(person));

/* Create object via constructor function */
var Person = function() {
  this.name = 'Max';
  this.age = 27;
};

var person = new Person();
console.log(Object.getPrototypeOf(Object.getPrototypeOf(person)));
