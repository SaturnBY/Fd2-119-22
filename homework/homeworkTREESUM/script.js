let arr = [5, 7,
	[4, [2], 8, [1, 3], 2],
	[9, []],
	1, 8
];



function getSum(massive) {
	let summa = 0;
	for (let i = 0; i < massive.length; i++) {
		if (Array.isArray(massive[i])) {
			summa += getSum(massive[i]);
		} else {
			summa += massive[i];
		}
	}
	return summa;
}



document.write("результат: " + getSum(arr));