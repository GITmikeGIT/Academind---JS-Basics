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
