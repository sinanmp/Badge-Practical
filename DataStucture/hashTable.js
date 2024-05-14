class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size); // Create an array of buckets (empty lists)
      for (let i = 0; i < size; i++) {
        this.buckets[i] = []; // Initialize each bucket as an empty list
      }
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i); // Add the ASCII code of each character in the key
      }
      return hash % this.size; // Apply the modulo operation for bucket mapping
    }
  
    insert(key, value) {
      const index = this.hash(key);
      this.buckets[index].push({ key, value }); // Add the key-value pair as an object to the bucket
    }
  
    get(key) {
      const index = this.hash(key);
      return this.buckets[index]; // Return the bucket containing the key-value pairs (if any)
    }
  
    display() {
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i].length > 0) { // Check if the bucket has any elements
          console.log(`Bucket ${i}:`);
          for (const item of this.buckets[i]) {
            console.log(`  - Key: ${item.key}, Value: ${item.value}`);
          }
        }
      }
    }
  }
  
  const table = new HashTable(20);
  
  table.insert('name', 'sinan');
  table.insert('place', 'koduvally');
  table.insert('age', '19');
  
  table.display();
  