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

    const car = new Auto('Ford', 'Fiesta', 2020);
    car.showCar();
}

runApp();