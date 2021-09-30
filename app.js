const Auto = require('./Auto');

function runApp() {
    /* const car2 = {
        brand: 'Ford',
        type: 'Fiesta',
        year: 2016,
        showInfo: function() {
            console.log('Funzione dentro l\'oggetto: ' + this.brand + ' ' + this.type + ', ' + this.year);
        }
    } */

    const hatchback = new Auto('Ford', 'Fiesta', 2020);
    const sedan = new Auto('Volkswagen', 'Passat', 2005);

    const cars = [hatchback, sedan];

    /* for (let i = 0; i < cars.length; i++) {
        cars[i].showCar();
    } */

    cars.forEach(car => {
        car.showCar();
    });
}

runApp();