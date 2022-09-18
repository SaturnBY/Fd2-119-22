function isPolindrom(phrase) {

	phrase = phrase.toLowerCase().replace(/[\s.,%!?ьъ]/g, '').split('ё').join('е');

	const poli = Math.floor(phrase.length / 2);
	for (let i = 0; i < poli; i++)
		if (phrase[i] !== phrase[phrase.length - i - 1])
			return ("Не полидром");
	return ("Полидром");
}
document.write(isPolindrom(prompt("Напишите слово для проверки на полиндром", "")));

