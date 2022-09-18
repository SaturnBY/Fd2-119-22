function isPalindromeRec(phrase) {

	phrase = phrase.toLowerCase().replace(/[\s.,%!?ьъ]/g, '').split('ё').join('е');
	const poli1 = phrase.length < 2;
	const poli2 = phrase.slice(0, 1) === phrase.slice(-1);
	return !poli1 && poli2
		? isPalindromeRec(phrase.slice(1, -1))
		: poli1;
}

document.write(isPalindromeRec(prompt("Напишите слово для проверки на полиндром", "")));