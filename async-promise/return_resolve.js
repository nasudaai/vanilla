const promise = new Promise(resolve => resolve(42))
console.log(promise)

promise.then((value) => console.log(value))

//short hand
const promise2 = Promise.resolve(111);

console.log(promise);
promise2.then(value => console.log(value));
