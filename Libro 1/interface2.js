var secondLake = {
    name: 'Superior',
    depth: 406.3,
    length: 616,
    area: 82100,
    isFreshwater: true,
    countries: ['Canada', 'United States']
};
//La declaracion de frozen es opcional al usar el ?
var thirdLake = {
    name: 'Baikal',
    depth: 1637,
    length: 636,
    area: 31500,
    isFreshwater: true,
    countries: ['Russia'],
    frozen: ['January', 'February', 'March', 'April', 'May']
};
var fourthLake = {
    name: 'Tanganyika',
    depth: 1470,
    length: 676,
    area: 32600,
    isFreshwater: true,
    countries: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
    kigoma: 'Tanzania',
    kalemie: 'Congo',
    bujumbura: 'Burundi'
};
var tankHit = function (tankName, damageDone) {
    tankName.health -= damageDone;
    return tankName.health;
};
