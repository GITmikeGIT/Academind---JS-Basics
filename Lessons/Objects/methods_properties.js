var path = require('path');
console.log(path.basename(__filename));

/** Important built-in Methods and Properties */
var person = {
  name: 'Max',
  age: 27,
  greet: function() {
    console.log('Hello, I am ' + this.name);
  }
};

/** To remove property of object you have to use delete keyword before */
// delete person.name;

console.log(person.name);

console.log('name' in person);

for (var property in person) {
  console.log([property, person[property]]);
}

/** Workaround for getting properties of object - old fashioned */
// Object.getOwnPropertyNames(person).forEach(function(element) {
//   console.log(element);
// });
