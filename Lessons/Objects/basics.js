var path = require('path');
console.log(path.basename(__filename));

/** Objects basics */
var person = {
  name: 'Max',
  age: 27,
  details: {
    hobbies: ['Sports', 'Cooking'],
    location: 'Germany'
  },
  greet: function() {
    console.log('Hello!');
  },
  'some-name': 'Xyz'
};

console.log(person);
console.log(person.name); //Better way

var field = 'some-name';
console.log(person[field]); //Only if field is dynamic || custom name

person.greet();

console.log(typeof person.greet);
