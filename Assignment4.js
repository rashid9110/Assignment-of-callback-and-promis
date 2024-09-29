async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
  
    try {
      const response = await fetch(url);
  
      // Check if the response is not OK (status code not in the 200-299 range)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse the JSON data
      const data = await response.json();
      return data; // Return the parsed JSON response
    } catch (error) {
      // Catch any errors that occur during the fetch or JSON parsing
      console.error("Error occurred:", error.message);
    }
  }
  
  // Example usage:
  fetchData().then((data) => {
    console.log(data); 
  });
  