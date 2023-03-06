import { ICar } from "../Form";

export interface carsPair {
    s: number, 
    time: number,
}

export const isObgon = (cars1: carsPair, cars2: carsPair, cars: {carA: ICar, carB: ICar, carG: ICar, carV: ICar}, xLast: number) => {
    const sx1 = (((+cars.carA.speed * 1000) / 3600) * cars1.time + (+cars.carA.acceleration * cars1.time ** 2) / 2);
    const sx2 = (((+cars.carG.speed * 1000) / 3600) * cars1.time + (+cars.carG.acceleration * cars2.time ** 2) / 2);
    
    return  xLast - sx1 - sx2 > 0;
};

// const cars1 = obgonAbs(carA, carB, deltaAbBefore, deltaAbAfter);
// const cars2 = obgonAbs(carG, carV, deltaGvBefore, deltaGvAfter);