// Target object
const target = {
    name: 'John',
    age: 30
  };
  
  // Handler object containing traps (methods)
  const handler = {
    // Trap for getting property values
    get: function(target, prop, receiver) {
        console.log(receiver,target)
      console.log(`Getting property "${prop}"`);
      return target[prop];
    },
    // Trap for setting property values
    set: function(target, prop, value, receiver) {
      console.log(`Setting property "${prop}" to ${value}`);
      target[prop] = value;
      // Indicate success
      return true;
    }
  };
 
  const proxy = new Proxy(target, handler);
  
  
  console.log(proxy.name); 
  proxy.age = 35; 
  

//   console.log(target.age); 
  