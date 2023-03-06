export const uravnenie = (a: number, b: number, c: number): number => {
	if (a == 0) return 0;
	let res: number[] = [];
	let D = b * b - 4 * a * c;
	if (D < 0) return 0;
	if (D === 0) res.push((-b + Math.sqrt(D)) / (2 * a));
	else if (D > 0) {
		let tmp: number[] = [];
		tmp.push((-b + Math.sqrt(D)) / (2 * a));
		tmp.push((-b - Math.sqrt(D)) / (2 * a));
		res.push(...tmp);
	}
	return Math.ceil(Math.max(...res, 0));
};