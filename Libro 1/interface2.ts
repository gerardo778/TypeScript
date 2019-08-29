interface Lakes {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[],
    frozen?: string[]
}
 
let secondLake: Lakes = {
    name: 'Superior',
    depth: 406.3,
    length: 616,
    area: 82100,
    isFreshwater: true,
    countries: ['Canada', 'United States']
}
 
//La declaracion de frozen es opcional al usar el ?
let thirdLake: Lakes = {
    name: 'Baikal',
    depth: 1637,
    length: 636,
    area: 31500,
    isFreshwater: true,
    countries: ['Russia'],
    frozen: ['January', 'February', 'March', 'April', 'May']
}

//Interfaces utilizando firma de indice para agregar informacion adicional
interface Lakes2 {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[],
    frozen?: string[],
    [extraProp: string]: any
}
 
let fourthLake: Lakes2 = {
    name: 'Tanganyika',
    depth: 1470,
    length: 676,
    area: 32600,
    isFreshwater: true,
    countries: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
    kigoma:'Tanzania',
    kalemie: 'Congo',
    bujumbura: 'Burundi'
}

//Interfaz con propiedad de solo lectura es decir no se podra modificar su valor
interface Enemy {
    readonly size: number,
    health: number,
    range: number,
    readonly damage: number
}

//Funcion con interfaz
interface EnemyHit {
    (name: Enemy, damageDone: number): number;
}
 
let tankHit: EnemyHit = function(tankName: Enemy, damageDone: number) {
    tankName.health -= damageDone;
    return tankName.health;
}