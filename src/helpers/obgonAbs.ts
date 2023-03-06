import { ICar } from '../Form';
import { uravnenie } from './uravnenie';

/** Первая машина обгоняет вторую. */
export const obgonAbs = (car1: ICar, car2: ICar, deltaL1: number, deltaL2: number): Error | {s: number, time: number} => {
	const v = ((+car1.speed - +car2.speed) * 1000) / 3600;
	const a = +car1.acceleration - +car2.acceleration;
	const s = deltaL1 + deltaL2 + +car1.width + +car2.width;
	const time = uravnenie(a, 2 * v, -2 * s);
	if (time < 0) {
		throw Error("Обгон невозможен");
	}
	return {
		s,
		time
	};
};