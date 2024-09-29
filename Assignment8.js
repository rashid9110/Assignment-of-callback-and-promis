function racePromises(promises) {
    return Promise.race(promises)
      .then(result => {
        return { status: 'resolved', value: result };
      })
      .catch(error => {
        return { status: 'rejected', reason: error };
      });
  }
  
  // Example usage:
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 rejected'), 5000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 2000);
  });
  
  const promisesArray = [promise1, promise2, promise3];
  
  racePromises(promisesArray).then(result => {
    console.log(result); // Output will depend on which promise resolves or rejects first
  });
  

//   function handleAllPromises(promises) {
//     const results = promises.map(p => 
//       p.then(value => ({ status: 'resolved', value }))
//        .catch(reason => ({ status: 'rejected', reason }))
//     );
  
//     return Promise.all(results);
//   }
  
//   // Example usage
//   const promisesArray = [promise1, promise2, promise3];
  
//   handleAllPromises(promisesArray).then(results => {
//     results.forEach(result => {
//       console.log(result); // Log each result whether resolved or rejected
//     });
//   });
  