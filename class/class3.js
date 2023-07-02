class Car {
    constructor({title}){
        this.title = title;
    }
    drive(){
        return 'ウィーン';
    }

}

const car = new Car({title: 'アクア'});
//console.log(car);
//console.log(car.drive());

class Toyota extends Car {
    constructor(options){
        super(options); //Car.constructor()
        this.color = options.color;
    }

    honk(){
        return 'ブブー！';
    }
}
const toyota = new Toyota({title:'アクア',color:'red'});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());