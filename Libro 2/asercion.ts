class Pajaro{
    fly(){
        console.log("Pajaro");
    }
    layEggs(){
        console.log("Pone huevos");
    }
}
class Pez {
    constructor(){
                    //	Solo	para	el	ejemplo
    }
    swim(){
        console.log("Pez")
        }
    layEggs(){
        console.log("Pone huevos");
    }
}
function getAnimal() : Pez |	Pajaro	{
    var	a : Pez	= new Pez();
    return	a;
}
let	pet	= getAnimal();
console.log(getAnimal());
pet.layEggs();

//Asercion
if((<Pez>pet).swim){
    (<Pez>pet).swim();
}	else if((<Pajaro>pet).fly)	{
    (<Pajaro>pet).fly();
}