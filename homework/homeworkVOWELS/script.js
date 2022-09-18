function vowels() {
	const oneLetter = ["а", "А", "У", "у", "О", "о", "Ы", "ы", "И", "и", "Э", "э", "я", "Я", "Ю", "ю", "ё", "Ё", "е", "Е"];
	const getStr = prompt("Введите любой текст на русском языке");
	let count = 0;

	for (let i = 0; i < getStr.length; i++) {
		if (oneLetter.includes(getStr[i])) {
			count++;
		}
	}
	document.write("Колличестве гласных букв:  " + count);
}
vowels();
