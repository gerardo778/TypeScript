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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino(name) {
        return _super.call(this, name) || this;
    }
    Rhino.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 10; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Rhino;
}(Animal));
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant(name) {
        return _super.call(this, name) || this;
    }
    Elephant.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 20; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Elephant;
}(Animal));
var array = [new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton")];
var ej2 = { Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant: new Elephant("Elefanton") };
console.log(array);
