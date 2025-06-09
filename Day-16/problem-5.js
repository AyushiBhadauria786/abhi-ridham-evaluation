// Call an API using fetch and display data, with error and loading states.

function asyncCall() {
  const urls = [
    'https://dummyjson.com/products/1',
    'https://dummyjson.com/products/2',
    'https://dummyjson.com/products/any' 
  ];

  const promises = urls.map(url =>
    fetch(url).then(res => res.json())
  );

  Promise.allSettled(promises).then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Response ${index + 1}:`, result.value);
      } else {
        console.log(`Error ${index + 1}:`, result.reason);
      }
    });
  });
}

asyncCall();



