function multiplyWithCallback(numbers, callback) {
    const results = numbers.map(number => number * 2); // Multiply each element by 2
    callback(results); // Pass the results to the callback function
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5];
  
  multiplyWithCallback(numbersArray, (result) => {
    console.log("Multiplied results:", result);
  });
  