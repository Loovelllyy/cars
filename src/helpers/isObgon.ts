import {ICar, TInitialValue} from "../Form";
import {uravnenie} from "./uravnenie";

class Car {
    constructor(
     public speed = 0,
     public acceleration = 0,
     private _time = 0,
     public width = 0,
     public active = true,
    ) { }

    static create(car: ICar) {
        return new Car(+car.speed, +car.acceleration, 0, +car.width, car.isActive)
    }

    get time(){
        return this._time;
    }

    set time(val){
        this._time = val;
    }

    get s() {
        if (!this.active) return 0;
        return (((this.speed * 1000) / 3600) * this.time + (this.acceleration * this.time ** 2) / 2)
    }
}

class OverCar extends Car {
    public car: Car;
    private _s: number;
    constructor(speed = 0, acceleration = 0, width = 0, deltaL1 = 0, deltaL2 = 0, car: Car) {
        super(speed, acceleration, 0, width, true);
        this.car = car;
        this._s = deltaL1 + deltaL2 + width + car.width;
    }

    static createOver(car: ICar, deltaL1: number, car2: Car, deltaL2: number, ) {
        if (car2.active) return new OverCar(+car.speed, +car.acceleration, +car.width, deltaL1, deltaL2, car2)
        return Car.create(car);
    }

    get s() {
        return this._s;
    }

    set time(time) {
        this._s = (((this.speed * 1000) / 3600) * time + (this.acceleration * time ** 2) / 2);
    }

    get time() {
        const v = ((this.speed - this.car.speed) * 1000) / 3600;
        const a = this.acceleration - this.car.acceleration;
        // const s = this.deltaL1 + this.deltaL2 + this.width + this.car.width;
        return uravnenie(a, 2 * v, -2 * this.s);
    }
}

export const isObgon = (values: TInitialValue) => {
    const carB = Car.create(values.carB);
    const carA = OverCar.createOver(values.carA, +values.deltaAbBefore, carB, +values.deltaAbAfter);
    const carG = Car.create(values.carV);
    carG.time = carA.time;
    const carV = OverCar.createOver(values.carG, +values.deltaGvBefore, carG, +values.deltaGvAfter);
    carV.time = carA.time;

    console.log({values, carA, carB, carV, carG});

    const lA = carA.s;
    const lV = values.carV.isActive? carV.s : carG.s;
    if (carA.time <= 0) return false;
    return +values.Xlast - lA - lV > 0;
};