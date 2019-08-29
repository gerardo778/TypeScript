class Person {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    introduceSelf() {
        console.log("Que onda" + this.name + "!");
    }
}
 
let personA = new Person("Gera");
 
//Muestra "Que onda Gera!"
personA.introduceSelf();
 
personA.name = "Gera2";
 
//Muestra "Que onda Gera2!"
personA.introduceSelf();


//Herencia de una clase
class Friend extends Person {
    yearsKnown: number;
    constructor(name: string, yearsKnown: number) {
        super(name);
        this.yearsKnown = yearsKnown;
    }
    timeKnown() {
        console.log("Somos amigos desde hace " + this.yearsKnown + " years")
    }
}
 
let friendA = new Friend("Pepito", 100);
 
// Prints: Que onda Pepito!
friendA.introduceSelf();
 
// Prints: Somos amigos desde hace 100 years (mi teclado esta en ingles)
friendA.timeKnown();