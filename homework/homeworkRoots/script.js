function squareRoots(a, b, c) {
	const d = b * b - 4 * a * c;

	if (d < 0)
		return [];
	if (a == 0)
		return [-c / b];
	if (d == 0)
		return [-b / (2 * a)];

	const x1 = (-b + Math.sqrt(d)) / (2 * a);
	const x2 = (-b - Math.sqrt(d)) / (2 * a);
	return [x1, x2];
}
function squareRootsTests() {


	{
		console.log('тест 0,5,-10 -> один корень 2');
		const roots = squareRoots(0, 5, -10);
		console.log(((roots.length == 1) && (roots[0] == 2))
			? 'пройден' : 'НЕ ПРОЙДЕН!')
	}

}

function ttt() {
	const a = parseInt(prompt('Введите a'));
	const b = parseInt(prompt('Введите b'));
	const c = parseInt(prompt('Введите c'));
	const roots = squareRoots(a, b, c);

	if (!roots.length)
		alert('корней нет!');
	else if (roots.length == 1)
		alert('один корень: ' + roots[0]);
	else
		alert('два корня: ' + roots[0] + ' и ' + roots[1]);
}

console.log(squareRootsTests());