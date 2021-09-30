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

module.exports = Auto;