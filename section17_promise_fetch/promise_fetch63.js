//ES6からはネイティブでPromiseが使える
promise = new Promise((resolve,reject) => {
    reject();
});
console.log(promise);