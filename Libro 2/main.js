//Promesas en paralelo
function loadItem(id) {
    return new Promise(function (resolve) {
        console.log('objeto de carga', id);
        setTimeout(function () {
            resolve({ id: id });
        }, 1000);
    });
}
var item1, item2;
loadItem(1)
    .then(function (res) {
    item1 = res;
    return loadItem(2);
})
    .then(function (res) {
    item2 = res;
    console.log('hecho');
});
Promise.all([loadItem(1), loadItem(2)])
    .then(function (res) {
    item1 = res[0], item2 = res[1];
    console.log('hecho');
});
