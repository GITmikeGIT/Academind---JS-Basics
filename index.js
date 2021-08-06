// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var vars = [true, 'text', 5, 5.5];
vars.forEach(value => {
  console.log([value, typeof value]);
});
console.log(typeof vars);

/*
 * JS Types
 * string, number, boolean, object, undefined
 */

var obj = {
  name: 'Max'
};

console.log(obj.name);


var obj2 = {
  name: 'Max'
};