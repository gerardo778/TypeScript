var Pajaro = /** @class */ (function () {
    function Pajaro() {
    }
    Pajaro.prototype.fly = function () {
        console.log("Pajaro");
    };
    Pajaro.prototype.layEggs = function () {
        console.log("Pone huevos");
    };
    return Pajaro;
}());
var Pez = /** @class */ (function () {
    function Pez() {
        //	Solo	para	el	ejemplo
    }
    Pez.prototype.swim = function () {
        console.log("Pez");
    };
    Pez.prototype.layEggs = function () {
        console.log("Pone huevos");
    };
    return Pez;
}());
function getAnimal() {
    var a = new Pez();
    return a;
}
var pet = getAnimal();
console.log(getAnimal());
pet.layEggs();
//	ASERCIÓN
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
