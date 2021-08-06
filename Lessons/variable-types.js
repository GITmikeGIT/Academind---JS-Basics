var vars = [true, 'text', 5, 5.5];
vars.forEach(value => {
  console.log([value, typeof value]);
});
console.log([typeof vars, vars[2]]);

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
