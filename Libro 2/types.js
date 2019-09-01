function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
function getAnimal() {
    var a;
    return a;
}
var pet = getAnimal();
pet.layEggs();
// Guards
function isPez(pet2) {
    return pet2.swim != undefined;
}
var pet2 = getAnimal();
if (isPez(pet2)) {
    pet2.swim();
    console.log('glup');
}
else {
    console.log('i believe i can fly, i believe i can touch the sky');
    pet2.fly();
}
