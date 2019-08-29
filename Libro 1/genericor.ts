function randomElem<T>(theArray: T[]): T {
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}

let positions: number[] = [103, 458, 472, 458];
let randomPosition: number = randomElem(positions);

interface People {
    name: string
}

interface Family {
    name: string,
    age: number,
    relation: string
}

interface Celebrity extends People {
    profession: string
}

function printName<T extends People>(theInput: T): void {
    console.log(`Mi nombre es ${theInput.name}`);
}

let serena: Celebrity = {
    name: 'Gerardo Alvarez',
    profession: 'Estudiante'
}

printName(serena);