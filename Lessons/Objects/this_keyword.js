var path = require('path');
console.log(path.basename(__filename));

/** The "this" Keyword and why it might behave strangely */
function thisKeyword() {
  console.log(this);
}

thisKeyword();

var obj = {
  obfn: thisKeyword
};

obj.obfn();
/** this keyword always refers to the left side of the function call - on the left of the dot. obj.obfn() - this refers to the obj object. when you call it with thisKeyword() it refers to the window object */

/** You can always bind an object to the this keyword by calling .bind() to the function  */

var person = {
  name: 'Max',
  age: 27
};
obj.obfn.bind(person)();

/** Handling this with bind, call, apply functions */
function thisKeyword2(message) {
  console.log(message + this);
}
obj.obfn = thisKeyword2;
console.log(path.basename('bind, call, apply - this keyword'));

obj.obfn.bind(person, 'Hello - bind ')();
obj.obfn.call(person, 'Hello - call ');
obj.obfn.apply(person, ['Hello - apply ']);
