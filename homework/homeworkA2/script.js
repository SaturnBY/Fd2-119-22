let noSpaces = function (anyStr) {


	document.write(anyStr);

	while (anyStr.startsWith(' '))
		anyStr = anyStr.substring(1);
	anyStr = "@@@" + anyStr;

	while (anyStr.endsWith(' '))
		anyStr = anyStr.substring(0, anyStr.length - 1);
	anyStr += "@@@";

	return anyStr;
}

document.write(noSpaces(prompt('Введите слово или несколько слов'))); 