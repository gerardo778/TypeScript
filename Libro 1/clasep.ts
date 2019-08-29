class Person {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    introduceSelf() {
        console.log("Hi, I am " + this.name + "!");
    }
}
 
let personA = new Person("Gera");
 
//Muestra "Que onda Gera!"
personA.introduceSelf();
 
personA.name = "Gera2";
 
//Muestra "Que onda Gera2!"
personA.introduceSelf();


//Modificadores de privacidad
class Person2 {
    public name: string; //Puede ser de igual manera private
    constructor(theName: string) {
        this.name = theName;
    }
    introduceSelf() {
        console.log("Que onda " + this.name + "!");
    }
}
 
let personB = new Person2("Gera");
 
//Muestra "Que onda Gera!"
personB.introduceSelf();
 
personB.name = "Gera2";
 
//Muestra "Que onda Gera2!"
personB.introduceSelf();