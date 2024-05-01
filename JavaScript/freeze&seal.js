const obj = {
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

console.log(obj); // Output: { name: 'John', age: 30, address: { city: 'San Francisco', country: 'USA' } }
