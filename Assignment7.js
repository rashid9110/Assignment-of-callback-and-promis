async function fetchMultipleData(urls) {
    try {
      // Use Promise.all to fetch all URLs concurrently
      const responses = await Promise.all(
        urls.map(url => fetch(url).then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Parse the response as JSON
        }))
      );
      return responses; // Return the array of responses
    } catch (error) {
      console.error("Error occurred while fetching data:", error.message);
      return []; // Return an empty array or handle errors as needed
    }
  }
  
  // Example usage:
  const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
  
  fetchMultipleData(urls).then(data => {
    console.log("Fetched Data:", data);
  });
  