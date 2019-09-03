// Ejemplo de llamada a then 
var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log('He sido llamado:', res === 123);
});
promise["catch"](function (err) {
});
// Ejemplo de llamada a catch 
var promise2 = new Promise(function (resolve, reject) {
    reject(new Error("Algo malo ha pasado"));
});
promise2.then(function (res) {
});
promise2["catch"](function (err) {
    console.log('Tengo una llamada: ', err.message);
});
