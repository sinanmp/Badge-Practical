const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 rejected'), 500);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 3 resolved'), 500);
  });

  Promise.race([promise1, promise2 , promise3])
    .then((value) => {
      console.log('Resolved:', value);
    })
    .catch((reason) => {
      console.log('Rejected:', reason);
    });
  