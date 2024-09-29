function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return fetch(userUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the user data
      })
      .then(userData => {
        // Fetch posts for the user after fetching user data
        return fetch(postsUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the posts data
          })
          .then(postsData => {
            // Return an object with user details and their posts
            return {
              user: userData,
              posts: postsData
            };
          });
      })
      .catch(error => {
        console.error("Error occurred:", error.message);
        // Handle errors here as needed, you could return a default value or rethrow
      });
  }
  // Example usage:
  fetchUserDataAndPosts(1).then(data => {
    if (data) {
      console.log("User Details:", data.user);
      console.log("User Posts:", data.posts);
    }
  });
  

  //alter nativ method

//   async function fetchUserDataAndPosts(userId) {
//     const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
//     const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  
//     try {
//       const userResponse = await fetch(userUrl);
//       if (!userResponse.ok) {
//         throw new Error(`HTTP error! status: ${userResponse.status}`);
//       }
//       const userData = await userResponse.json();
  
//       const postsResponse = await fetch(postsUrl);
//       if (!postsResponse.ok) {
//         throw new Error(`HTTP error! status: ${postsResponse.status}`);
//       }
//       const postsData = await postsResponse.json();
  
//       return { user: userData, posts: postsData };
//     } catch (error) {
//       console.error("Error occurred:", error.message);
//     }
//   }
  
//   // Example usage:
//   fetchUserDataAndPosts(1).then(data => {
//     if (data) {
//       console.log("User Details:", data.user);
//       console.log("User Posts:", data.posts);
//     }
//   });
  