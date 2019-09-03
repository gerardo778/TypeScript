Promise.resolve(123)
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
});
Promise.reject(new Error('something bad happened'))
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message);
});
function iReturnPromiseAfter1Second() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Hello world!"); }, 1000);
    });
}
Promise.resolve(123)
    .then(function (res) {
    return iReturnPromiseAfter1Second();
})
    .then(function (res) {
    console.log(res); // Hello world!
});
