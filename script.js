window.promises = [];

function createRandomPromise() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    setTimeout(() => {
      resolve(`Resolved after ${delay / 1000} seconds`);
    }, delay);
  });
}


for (let i = 0; i < 5; i++) {
  window.promises.push(createRandomPromise());
}


Promise.any(window.promises)
  .then(result => {
    
    document.getElementById('output').innerText = result;
  })
  .catch(error => {
    console.error('Error:', error);
  });



// Do not change the code above this
// add your promises to the array `promises`
