var path = require('path');
console.log(path.basename(__filename));

/** Properties & this */
var person = {
  name: 'Max',
  age: 27,
  details: {
    hobbies: ['Sports', 'Cooking'],
    location: 'Germany'
  },
  greet: function() {
    console.log('Hello, I am ' + this.name + '!');
  }
};

console.log(typeof person.name);

person.greet();
person.name = 'Anna';
console.log(person);

/**
 * Alternative way of Creating Objects - Object Constructor
 */
console.log('Object Constructor');
var anotherPerson = new Object();
anotherPerson.name = 'Anna';
anotherPerson.age = 27;
console.log(anotherPerson);

/**
 * Objects are Reference Types (Refresher)
 */
console.log('Objects are Reference Types');

var person = {
  name: 'Max',
  age: 27
};
var anotherPerson = new Object();
anotherPerson.name = 'Max';
anotherPerson.age = 27;
console.log(anotherPerson);

console.log(anotherPerson == person);

anotherPerson = { ...person };
console.log(anotherPerson == person);

anotherPerson = person;
console.log(anotherPerson == person);

/** Object.create() */
var person = {
  name: 'Max',
  age: 27
};

var anotherPerson = Object.create(person); // prototype as an argument
anotherPerson.name = 'Anna';

console.log(anotherPerson);
console.log(anotherPerson.age);
