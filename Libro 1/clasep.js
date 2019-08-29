var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I am " + this.name + "!");
    };
    return Person;
}());
var personA = new Person("Gera");
//Muestra "Que onda Gera!"
personA.introduceSelf();
personA.name = "Gera2";
//Muestra "Que onda Gera2!"
personA.introduceSelf();
//Modificadores de privacidad
var Person2 = /** @class */ (function () {
    function Person2(theName) {
        this.name = theName;
    }
    Person2.prototype.introduceSelf = function () {
        console.log("Que onda " + this.name + "!");
    };
    return Person2;
}());
var personB = new Person2("Gera");
//Muestra "Que onda Gera!"
personB.introduceSelf();
personB.name = "Gera2";
//Muestra "Que onda Gera2!"
personB.introduceSelf();
