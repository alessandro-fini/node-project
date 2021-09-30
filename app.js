class Auto {
    brand = '';
    type = '';
    year = '';

    constructor(_brand, _type, _year) {
        this.brand = _brand;
        this.type = _type;
        this.year = _year;
    }

    showCar() {
        console.log(this.brand + ' ' + this.type + ', ' + this.year);
    }
}

function runApp() {
    /* const car = {
        brand: 'Alfa Romeo',
        type: 'Giulia',
        year: 2020
    }

    const car2 = {
        brand: 'Ford',
        type: 'Fiesta',
        year: 2016,
        showInfo: function() {
            console.log('Funzione dentro l\'oggetto: ' + this.brand + ' ' + this.type + ', ' + this.year);
        }
    } */

    /* function show(_car) {
        console.log(_car.brand + ' ' + _car.type + ', ' + _car.year);
    } */

    const car = new Auto('Ford', 'Fiesta', 2020);
    car.showCar();
}

runApp();