// Promise constructor accepts a function with 2 parameters
// This function is called the executor
// Conventionally the parameters are called 'resolve' and 'reject'
// These parameters mark successful and unsuccessful compeletion of the executor function

const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        console.log('resolving the promises...')
        resolve('Hello, Promises!');
    } 
    reject(new Error('In 10% of the cases, I fail...miserably'));
});

const delay = (ms) => new Promise((resolve => {
    setTimeout(resolve,ms)
}))

myPromise.then(
    () => console.log('resolved'),
    (error) => console.log(error.message);
);