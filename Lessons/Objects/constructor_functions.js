var path = require('path');
console.log(path.basename(__filename));

/** Constructor functions */
function Person() {
  this.name = 'Max';
  this.greet = function() {
    console.log(`Hello, I am ${this.name}`);
  };
}

Person.prototype.greetGeneral = function() {
  console.log(`Hello`);
};
Person.prototype.name = 'Anna';

var person = new Person();
console.log(person.__proto__ == Object.prototype);
console.log(person.__proto__ == Person);
console.log(person.__proto__ == Person.prototype);

person.greet();

person.name = 'Anna';
person.greet();

Person.prototype.name = 'Chris';

var anotherPerson = new Person();
person.greet();
anotherPerson.greet();
anotherPerson.greetGeneral();

console.log(anotherPerson instanceof Person);
