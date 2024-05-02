const obj1 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

Object.freeze(obj);
obj.name = 'Alice'; // Attempted modification fails silently
obj.address.city = 'San Francisco'; // Nested object modification fails silently

console.log(obj1); // Output: { name: 'John', age: 30, address: { city: 'San Francisco', country: 'USA' } }



//obj
const obj2 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

Object.seal(obj2);
obj.name = 'Alice'; // Modification of existing property succeeds
obj.gender = 'Female'; // Attempted addition fails silently
delete obj.age; // Attempted deletion fails silently
obj.address.city = 'San Francisco'; // Nested object modification succeeds

console.log(obj); // Output: { name: 'Alice', age: 30, address: { city: 'San Francisco', country: 'USA' } }
