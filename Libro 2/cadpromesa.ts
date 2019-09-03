Promise.resolve(123)
    .then((res) => {
        console.log(res);
        return 456;
    })
    .then((res) => {
        console.log(res);
        return Promise.resolve(123);
    })
    .then((res) => {
        console.log(res);
        return Promise.resolve(123);
    })

Promise.reject(new Error('something bad happened'))
.then((res) => {
    console.log(res); 
    return 456;
})
.then((res) => {
    console.log(res); 
    return Promise.resolve(123);
})
.then((res) => {
    console.log(res); 
    return Promise.resolve(123);
})
.catch((err) => {
    console.log(err.message);        
});

function iReturnPromiseAfter1Second():Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Hello world!"), 1000);
    });
}

Promise.resolve(123)
    .then((res)=>{
         return iReturnPromiseAfter1Second();
    })
    .then((res) => {
        console.log(res); // Hello world!
    });