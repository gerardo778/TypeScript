//Suma de 2 numeros con genericos
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
function echo(arg) {
    console.log(arg.length);
    return arg;
}
var a = echo("aaa");
var t = echo({ length: 2, name: "aa" });
