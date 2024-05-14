const util = require('util');

const name = 'John';
const age = '3';
const age2 = 10;
const message = util.format('Hello, my name is %s and I am %d %d years old.', name, age , age2);
console.log(message); // Output: Hello, my name is John and I am 30 years old.
