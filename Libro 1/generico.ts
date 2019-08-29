//Ejemplo de generico
function randomElem<T>(theArray: T[]): T {
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}

let positions: number[] = [103, 458, 472, 458];
let randomPosition: number = randomElem(positions); 