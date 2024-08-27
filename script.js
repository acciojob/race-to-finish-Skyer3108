window.promises = [];


const promises = Array.from({ length: 5 }, () => {
    const delay = Math.floor(Math.random() * 5000) + 1000; 
    return new Promise(resolve => setTimeout(() => resolve(delay), delay));
});


Promise.any(promises)
    .then(result => {
     
        document.getElementById('output').innerText = `First resolved promise result: ${result} ms`;
    })

        document.getElementById('output').innerText = `No promise resolved: ${error}`;
    });

// Do not change the code above this
// add your promises to the array `promises`
