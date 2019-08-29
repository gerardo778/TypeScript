var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Que onda" + this.name + "!");
    };
    return Person;
}());
var personA = new Person("Gera");
//Muestra "Que onda Gera!"
personA.introduceSelf();
personA.name = "Gera2";
//Muestra "Que onda Gera2!"
personA.introduceSelf();
//Herencia de una clase
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend(name, yearsKnown) {
        var _this = _super.call(this, name) || this;
        _this.yearsKnown = yearsKnown;
        return _this;
    }
    Friend.prototype.timeKnown = function () {
        console.log("Somos amigos desde hace " + this.yearsKnown + " years");
    };
    return Friend;
}(Person));
var friendA = new Friend("Pepito", 100);
// Prints: Que onda Pepito!
friendA.introduceSelf();
// Prints: Somos amigos desde hace 100 years (mi teclado esta en ingles)
friendA.timeKnown();
