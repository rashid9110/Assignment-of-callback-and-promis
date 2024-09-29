function sumAsync(a, b, callback) {
    setTimeout(() => {
      const sum = a + b;
      callback(sum);
    }, 1000);
  }
  
  // Example usage:
  sumAsync(5, 10, (result) => {
    console.log(`The sum is: ${result}`); 
  });
  