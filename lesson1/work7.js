// const b = 15
// const a = 1
// for (let i = a; i < b; i++)
// 	setTimeout(() => console.log(i), 1000)

// let str = "этО тАкАя дЛинНаЯ СтРокАа"
// let lowStringOf = str.toLowerCase()
// let firstOfword = lowStringOf[0]
// let first = firstOfword.toUpperCase()
// let strDown = lowStringOf.slice(1)
// let strUp = first + strDown
// console.log(strUp)

// let str = "этО тАкАя дЛинНаЯ СтРокАа";
// let strS = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(strS)

// const age = 11
// const accomponent = true
// const film = (age & accomponent) >= 12
// console.log(film)

// let a = { name: "test" }
// let b = a
// b.name = "hello"
// console.log(a)

// const randomHead = ['голова', 'рука', 'нога', 'туловище', 'спина',]
// const randomWord = ['вонючая', 'крутая', 'сопливая', 'больная', 'мелкая']
// const randomAnimal = ['змея', 'выдра', 'оленина', 'бобриха', 'курапатка']
// const randomHit = ['Славы', 'Димы', 'Игоря', 'Жени', 'Саши',]
// const randomHeads = randomHead[Math.floor(Math.random() * randomHead.length)]
// const randomAnimals = randomAnimal[Math.floor(Math.random() * randomHead.length)]
// const randomWords = randomWord[Math.floor(Math.random() * randomHead.length)]
// const randomHits = randomHit[Math.floor(Math.random() * randomHead.length)]
// const randomInsult = ' У тебя ' + randomHeads + ' словно ' + randomWords + ' '
// 	+ randomAnimals + ' но лучше чем у ' + randomHits + '!!!'
// console.log(randomInsult)
// const randomHead = ['голова', 'рука', 'нога', 'туловище', 'спина',]
// const randomWord = ['вонючая', 'крутая', 'сопливая', 'больная', 'мелкая']
// const randomAnimal = ['змея', 'выдра', 'оленина', 'бобриха', 'курапатка']
// const randomHit = ['Славы', 'Димы', 'Игоря', 'Жени', 'Саши',]
// const randomHeads = randomHead[Math.floor(Math.random() * randomHead.length)]
// const randomAnimals = randomAnimal[Math.floor(Math.random() * randomHead.length)]
// const randomWords = randomWord[Math.floor(Math.random() * randomHead.length)]
// const randomHits = randomHit[Math.floor(Math.random() * randomHead.length)]
// const randomInsult = ['У тебя', randomHeads, 'словно', randomWords, randomAnimals, 'но лучше чем у', randomHits, '!!!'].join(' ')
// console.log(randomInsult)

// const numb = [3, 2, 1].join(' больше чем,')
// console.log(numb)

// const scurs = {
// 	Anna: 0,
// 	Max: 0,
// 	Dima: 0,
// 	Oleg: 0
// }
// scurs['Dima'] += 2
// scurs['Dima'] += 3
// console.log(scurs)

// const myCrazyOb = {
// 	mame: 'нелнпый обьект',
// 	"some array": [7, 9, { purpos: 'путаница', number: 123 }, 3.3],
// 	"random animal": "банановая акула"
// }

// console.log(myCrazyOb['some array'][2].number)

// let myName = 'sergei'
// console.log('Привет ' + 0)
// myName === 'sergei' ? console.log('Все верно меня так зовут') : console.log('не верное имя');

// let myName = 'николай';
// console.log('привет ' + myName);
// if (myName === 'николай') {
// 	console.log('Все верно меня так зовут');
// } else {
// 	console.log('не верное имя');
// }

// let fatherName = 'Алин';
// console.log('Привет ' + fatherName);
// if (fatherName === 'Николай') {
// 	console.log('Здраствую папа');
// } else if (fatherName === 'Алина') {
// 	console.log('Здраствую мама');
// } else {
// 	console.log('Ты кто?');
// }

// let sayHello = 5;
// for (let i = 0; i < sayHello; i++) {
// 	console.log('Hello')
// }
// console.log('goodby')

// for (let x = 3; x < 10000; x = x * 3)
// 	console.log(x)

// let x = 3
// while (x < 10000) {
// 	x = x * 3
// 	console.log(x);
// 	x++;
// }

// let animals = ['лев', 'тигр', 'орел', 'медведь', 'змея']
// for (let i = 0; i < animals.length; i++) {
// 	(animals[i] += ' прекрасное животное')
// }
// console.log(animals)



// let alfabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
// let randomAlfabets = alfabet[Math.floor(Math.random() * alfabet.length)]
// let randomString = ''
// while (randomString.length < 6) {
// 	(randomString += randomAlfabets);
// 	randomAlfabets = alfabet[Math.floor(Math.random() * alfabet.length)]
// }
// console.log(randomString)

let input = 'javascript is awesome'
let output = ''
for (let i = 0; i < input.length; i++) {
	if (input[i] === "a") { output += "4" }
	else if (input[i] === "e") { output += "3" }
	else if (input[i] === "i") { output += "1" }
	else if (input[i] === "o") { output += "0" }
	else { output += input[i] }
}
console.log(output);
