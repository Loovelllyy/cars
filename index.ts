/*jshint esversion: 10 */

const a = prompt("количество машин", '');
//кнопка
const button = document.getElementById("btn");
const inp = document.getElementById("inp").value;


// 1 и 2 машина
const speed1 = Number(document.getElementById("speedFirstCAR")); // скорость 1 машины
speed2 = Number(document.getElementById("speedSecondCAR")); // скорость 2 машины
a1 = Number(document.getElementById("boostFirstCAR")); // ускорение 1 машины
a2 = Number(document.getElementById("boostSecondCAR")); // ускорение 2 машины
width1 = Number(document.getElementById("lengthFirstCAR")); // длина 1 машины
width2 = Number(document.getElementById("lengthSecondCAR")); // длина 2 машины
deltaAbBefore = Number(document.getElementById("deltaABBeforeCAR")); // дельта до
deltaAbAfter = Number(document.getElementById("deltaABAfterCAR")); // дельта после

// 3 и 4 машина
speed3 = Number(document.getElementById("speedThirdCAR").value); // скорость 3 машины
speed4 = Number(document.getElementById("speedFourthCAR").value); // скорость 4 машины
a3 = Number(document.getElementById("boostThirdCAR").value); // ускорение 3 машины
a4 = Number(document.getElementById("boostFourthCAR").value); // ускорение 4 машины
width3 = Number(document.getElementById("lengthThirdCAR").value); // длина 3 машины
width4 = Number(document.getElementById("lengthFourthCAR").value); // длина 4 машины
deltaGvBefore = Number(document.getElementById("deltaGVBeforeCAR").value); // дельта до
deltaGvAfter = Number(document.getElementById("deltaGVAfterCAR").value); // дельта после

console.log(speed1);
button.onclick = function () {
	console.log("клик");
	console.log(type(speed1));
	if (a === 4 && a !== 1) { // условие для 4 машин

		// stylconsole.clear();
		const Xlast = 300;
		const carA = {
			width1: 0, //4
			speed1: 0, //60
			a1: 0 // 2
		};
		console.log(type(carA));
		const carB = {
			width2, //4
			speed2, //50
			a2 // 1
		};
		const carV = {
			width3, // 4
			speed3, // 90
			a3 // 2
		};
		const carG = {
			width4, // 4
			speed4, // 50
			a4 //1
		};
		//  deltaAbBefore = 8;
		//  deltaAbAfter = 8;
		//  deltaGvBefore = 8;
		//  deltaGvAfter = 8;


		const uravnenie = (a, b, c) => {
			if (a == 0) return false;
			let res = [];
			let D = b * b - 4 * a * c;
			if (D < 0) return false;
			if (D === 0) res.push((-b + Math.sqrt(D)) / (2 * a));
			else if (D > 0) {
				let tmp = [];
				tmp.push((-b + Math.sqrt(D)) / (2 * a));
				tmp.push((-b - Math.sqrt(D)) / (2 * a));
				res.push(...tmp);
			}
			return Math.ceil(Math.max(...res));
		};
		const obgonAbs = (car1, car2, deltaL1, deltaL2) => {
			const v = ((car1.speed - car2.speed) * 1000) / 3600;
			const a = car1.a - car2.a;
			const s = deltaL1 + deltaL2 + car1.width + car2.width;
			const time = uravnenie(a, 2 * v, -2 * s);
			if (time < 0) {
				throw Error("Обгон невозможен");
				// document.getElementById("inp").value = "Обгон невозможен"; // вывод ошибок почему то не работает.... не выводит эту строку
			}
			return {
				s,
				time
			};
		};


		//  *- если поля пустые -*
		// if (speed1 == "" || speed2 == "" || a1 == "" || a2 == "" || width1 == "" || width2 == "" || deltaAbAfter == "" || deltaAbBefore == "") {
		// 	console.log("er");
		// } else {
		// 	console.log("lox");
		// }

		console.log(uravnenie(52, 564, 36));
		console.log(obgonAbs(carA, carB, deltaAbAfter, deltaAbBefore));

		const isObgon = () => {
			try {
				const cars1 = obgonAbs(carA, carB, deltaAbBefore, deltaAbAfter);
				const cars2 = obgonAbs(carG, carV, deltaGvBefore, deltaGvAfter);
				const sx1 = (((carA.speed * 1000) / 3600) * cars1.time + (carA.a * cars1.time ** 2) / 2);
				const sx2 = (((carG.speed * 1000) / 3600) * cars1.time + (carG.a * cars2.time ** 2) / 2);

				console.log(sx1, sx2);
				document.getElementById("inp").innerHTML = sx1 + "" + sx2; // вывод для 4 машин

				return {
					isObgon: Xlast - sx1 - sx2 > 0,
					needModal: false,
					message: ""
				};
			} catch (e) {
				return {
					isObgon: false,
					needModal: true,
					message: e.message
				};
			}
		};
		console.log(isObgon());

	}
	// else if(a == 2 || a == 3 && a !== 1){  // условие для двух и трех машин
	// 	console.log("2");

	// 	const inp = document.getElementById("inp").value;
	// 	console.log("клик");
	// 	console.log(inp);
	// 	// stylconsole.clear();
	// 	const Xlast = 300;
	// 	const carA = {
	// 		width1,
	// 		speed1,
	// 		a1
	// 	};
	// 	const carB = {
	// 		width2,
	// 		speed2,
	// 		a2
	// 	};

	// 	 deltaAbBefore = 8;
	// 	 deltaAbAfter = 8;


	// 	const uravnenie = (a, b, c) => {
	// 		if (a == 0) return false;
	// 		let res = [];
	// 		let D = b * b - 4 * a * c;
	// 		if (D < 0) return false;
	// 		if (D === 0) res.push((-b + Math.sqrt(D)) / (2 * a));
	// 		else if (D > 0) {
	// 			let tmp = [];
	// 			tmp.push((-b + Math.sqrt(D)) / (2 * a));
	// 			tmp.push((-b - Math.sqrt(D)) / (2 * a));
	// 			res.push(...tmp);
	// 		}
	// 		return Math.ceil(Math.max(...res));
	// 	};

	// 	const obgonAbs = (car1, car2, deltaL1, deltaL2) => {
	// 		const v = ((car1.speed - car2.speed) * 1000) / 3600;
	// 		const a = car1.a - car2.a;
	// 		const s = deltaL1 + deltaL2 + car1.width + car2.width;
	// 		const time = uravnenie(a, 2 * v, -2 * s);
	// 		if (time < 0) {
	// 			// throw Error("Обгон невозможен");
	// 			document.getElementById("inp").value = "Обгон невозможен"; // вывод ошибок почему то не работает.... не выводит эту строку
	// 		}
	// 		return {
	// 			s,
	// 			time
	// 		};
	// 	};

	// 	if (speed1 == "" || speed2 == "" || a1 == "" || a2 == "" || width1 == "" || width2 == "" || deltaAbAfter == "" || deltaAbBefore == "") {
	// 		console.log("er");
	// 	} else {
	// 		console.log("lox");
	// 	}

	// 	// console.log(uravnenie(52,564,36)); 
	// 	// console.log(obgonAbs(carA, carB, 8, 8));  

	// 	const isObgon = () => {
	// 		try {
	// 			const cars1 = obgonAbs(carA, carB, deltaAbBefore, deltaAbAfter);     
	// 			const sx1 = (((carA.speed * 1000) / 3600) * cars1.time + (carA.a * cars1.time ** 2) / 2);


	// 			console.log(sx1);
	// 			document.getElementById("inp").innerHTML = sx1; // вывод для двух машин

	// 			return {
	// 				isObgon: Xlast - sx1  > 0,
	// 				needModal: false,
	// 				message: ""
	// 			};
	// 		} catch (e) {
	// 			return {
	// 				isObgon: false,
	// 				needModal: true,
	// 				message: e.message
	// 			};
	// 		}
	// 	};
	// 	console.log(isObgon());
	// }
}