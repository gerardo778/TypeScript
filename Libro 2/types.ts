// Alias: nombre alternativo de tipo de dato
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
 if (typeof n === "string") {
     return n;
 }
 else {
     return n();
 }
}

// Union: se utiliza cuando nombre del método es igual, sin importar el contenido
interface Pajaro {
    fly();
    layEggs();
}
interface Pez {
    swim();
    layEggs();
}
function getAnimal() : Pez | Pajaro {
    var a : Pez;
    return a;
}
let pet = getAnimal();
pet.layEggs();

// Guards
function isPez(pet2: Pez |Pajaro): pet2 is Pez {
    return (<Pez>pet2).swim != undefined;
}
let pet2 = getAnimal();
if(isPez(pet2)) {
    (<Pez>pet2).swim();
    console.log('glup');
} else {
    console.log('i believe i can fly, i believe i can touch the sky');
    pet2.fly();
}