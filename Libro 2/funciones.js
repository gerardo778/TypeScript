//Filtrar tipo de datos en una funcion
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("	") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join("	") + value;
    }
    throw new Error("Se espera un string o un numero\t'" + padding + "'\t");
}
console.log(padLeft("hola", "aaaa"));
console.log(padLeft("hola", 5));
//Igualacion de funciones
var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x;
var a = function () { return ({ name: 'Alice' }); };
var b = function () { return ({ name: 'Alice', location: 'Seattle' }); };
a = b;
