// Ejemplo de llamada a then 
const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('He sido llamado:', res === 123);
});
promise.catch((err) => {

});

// Ejemplo de llamada a catch 
const promise2 = new Promise((resolve, reject) => {
    reject(new Error("Algo malo ha pasado"));
});
promise2.then((res) => {
    
});
promise2.catch((err) => {
    console.log('Tengo una llamada: ', err.message); 
});