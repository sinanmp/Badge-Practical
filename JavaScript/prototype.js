// Adding a custom method to Object.prototype
Object.prototype.sayHello = function() {
    return "Hello, world!";
  };
  
  // Creating an object
  let obj = {};
  
  // Calling the custom method
  console.log(sayHello()); // Output: "Hello, world!"
  