var animales;
(function (animales) {
    animales[animales["gato"] = 0] = "gato";
    animales[animales["tigre"] = 1] = "tigre";
    animales[animales["prro"] = 2] = "prro";
    animales[animales["toro"] = 3] = "toro";
    animales[animales["delfin"] = 4] = "delfin";
})(animales || (animales = {}));
var c = animales.prro;
console.log(animales[2]);
console.log(animales.delfin);
