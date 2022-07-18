
// while (true) {
// 	const fName = String(firstName);
// 	if (!String(fName))
// 		break;
// 	firstName = prompt('Введите вашу фамилию корректно:')
// }
// var firstName = prompt('Введите фамилию:');
// var myName = prompt('Введите имя:');
// var secondName = prompt('Введите отчество:');

var firstName;
do {
	firstName = prompt('Какая у вас фамилия?');
} while (firstName === '' || false);
var myName;
do {
	myName = prompt('Какое у вас имя?');
} while (myName === '' || false);

var secondName;
do {
	secondName = prompt('Какое у вас отчество?');
} while (secondName === '' || false);
var ageStr = prompt('Введите ваш возраст:');
while (true) {
	var age = parseInt(ageStr);
	if (!isNaN(age))
		break; // введено корректное число - выходим из цикла
	ageStr = prompt('Введите ваш возраст корректно:');
}
var ageDay = (age * 365);
var ageEar = (age + 5);

var gender = confirm('Ваш пол мужской:'); {
	if (gender == true)
		(gender = ('мужской'));
	else
		(gender = ('женский'));
}
var ageM
ageM = age
if (age <= 62 && gender == 'мужской')
	ageM = ('нет');
else if (age > 62 && gender == 'мужской')
	ageM = ('да');
else if (age <= 58) {
	if (gender == 'женский' && age < 58)
		ageM = ('нет');
	else
		ageM = ('нет');
}
else {
	if (gender == 'женский' && age > 58)
		ageM = ('да');
	else
		ageM = ('да');
}
alert('Ваше ФИО: ' + firstName + ' ' + myName + ' ' + secondName + '\nВаш возраст в годах: ' + age + ' лет' + '\n' + 'Ваш возраст в днях: ' + ageDay + ' дней' + '\n' + 'Ваш возраст через 5 лет: ' + ageEar + ' лет' + '\n' + 'Ваш пол: ' + gender + ' ' + '\n' + 'Вы на пенсии: ' + ageM + ' ')
