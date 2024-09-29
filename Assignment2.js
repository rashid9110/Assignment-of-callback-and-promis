function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Change this to `false` to simulate an error.
        
        if (success) {
          resolve("Data fetched successfully.");
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000); // 2 seconds delay
    });
  }
  
  // Example usage:
  getData()
    .then((message) => {
      console.log(message); // Outputs: Data fetched successfully.
    })
    .catch((error) => {
      console.error(error); // Outputs: Failed to fetch data. (if rejected)
    });
  