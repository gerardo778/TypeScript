class Person {
    private name: string;
    protected age: number;
    protected constructor(theName: string, theAge: number) {
        this.name = theName;
        this.age = theAge;
    }
    introduceSelf() {
        console.log("Que onda " + this.name + "!");
    }
}
 
class Friend extends Person {
    yearsKnown: number;
    constructor(name: string, age: number, yearsKnown: number) {
        super(name, age);
        this.yearsKnown = yearsKnown;
    }
    timeKnown() {
        console.log("Somos amigos desde " + this.yearsKnown + " years")
    }
    friendSince() {
        let firstAge = this.age - this.yearsKnown;
        console.log(`Somos compas desde que tenia ${firstAge} years`)
    }
}
 
let friendA = new Friend("Angel", 21, 18);

 
//Muestra Somos compas desde que tenia 21 years
friendA.friendSince();