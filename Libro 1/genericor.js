function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPosition = randomElem(positions);
function printName(theInput) {
    console.log("Mi nombre es " + theInput.name);
}
var serena = {
    name: 'Gerardo Alvarez',
    profession: 'Estudiante'
};
printName(serena);
