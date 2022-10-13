// Настройка «холста»
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
// добавляем графику поля
const pool = new Image();
pool.src = "img/pool.png";
// добавляем графику обЪекта-еда
const foodImg = new Image();
foodImg.src = "img/food.png";
// добавляем ширину поля
let blockSize = 32;
// Устанавливаем счет 0
let score = 0;
// добавляем обЪекта-еда на поле
let food = {
	x: Math.floor((Math.random()*17+1))*blockSize,
	y: Math.floor((Math.random()*15+3))*blockSize,
};
// рисуем змейку
let snake=[];
snake[0]={
	x:9*blockSize,
	y:10*blockSize,
};
// Задаем обработчик события (клавиши-стрелки)
document.addEventListener('keydown', direction);
let dir;
function direction(event) {
	if(event.keyCode == 37 && dir != "right")
		dir = "left";
	else if(event.keyCode == 38 && dir != "down")
		dir = "up";
	else if(event.keyCode == 39 && dir != "left")
		dir = "right";
	else if(event.keyCode == 40 && dir != "up")
		dir = "down";
}
function eatTail(head, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y)
			clearInterval(game);
}
}
// Рисуем поле
function drawBorder () {
// поле
ctx.drawImage(pool,0, 0);
// еда
ctx.drawImage(foodImg, food.x, food.y);
// змейка
for (let i = 0; i < snake.length; i++) {
ctx.fillStyle =i==0 ?  'green':'blue';
ctx.fillRect (snake[i].x, snake[i].y, blockSize, blockSize)
}
// Выводим счет игры в левом верхнем углу
ctx.fillStyle = "white";
ctx.font = "bold 50px serif";
ctx.fillText(score, blockSize*2.5, blockSize*1.7);
// движение змейки
let snakeX = snake[0].x;
let snakeY = snake[0].y;

if(snakeX == food.x && snakeY == food.y) {
	score++;
	food = {
		x: Math.floor((Math.random() * 17 + 1)) * blockSize,
		y: Math.floor((Math.random() * 15 + 3)) * blockSize,
	};
} else
// удаление следа (чистим массив)
snake.pop();



if(snakeX < blockSize || snakeX > blockSize * 17
	|| snakeY < 3 * blockSize || snakeY > blockSize * 17)
	clearInterval(game);
// проверка на движение
if( dir =='left') snakeX -= blockSize;
if( dir =='right') snakeX += blockSize;
if( dir =='up') snakeY -= blockSize;
if( dir =='down') snakeY += blockSize;
// рисуем движение головы змеи
let newHead={
	x:snakeX,
	y:snakeY,
};
eatTail(newHead, snake);

snake.unshift(newHead);
}
let game = setInterval(drawBorder, 100);










// // Выводим счет игры в левом верхнем углу
// const drawScore = function () {
// 	ctx.font = "bold 20px serif";
// 	ctx.fillStyle = "Black";
// 	ctx.textAlign = "left";
// 	ctx.textBaseline = "top";
// 	ctx.fillText("Счет: " + score, blockSize, blockSize);
// };
// // Отменяем действие setInterval и печатаем сообщение «Конец игры»
// const gameOver = function () {
// 	clearInterval(intervalId);
// 	ctx.font = "bold 60px serif";
// 	ctx.fillStyle = "Black";
// 	ctx.textAlign = "center";
// 	ctx.textBaseline = "middle";
// 	ctx.fillText("Конец игры", width / 2, height / 2);
// };
// // Рисуем окружность 
// const circle = function (x, y, radius, fillCircle) {
// 	ctx.beginPath();
// 	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
// 	if (fillCircle) {
// 		ctx.fill();
// 	} else {
// 		ctx.stroke();
// 	}
// };
// // Задаем конструктор Block (ячейка)
// const Block = function (col, row) {
// 	this.col = col;
// 	this.row = row;
// };
// // Рисуем квадрат в позиции ячейки
// Block.prototype.drawSquare = function (color) {
// 	const x = this.col * blockSize;
// 	const y = this.row * blockSize;
// 	ctx.fillStyle = color;
// 	ctx.fillRect(x, y, blockSize, blockSize);
// };
// // Рисуем круг в позиции ячейки
// Block.prototype.drawCircle = function (color) {
// 	const centerX = this.col * blockSize + blockSize / 2;
// 	const centerY = this.row * blockSize + blockSize / 2;
// 	ctx.fillStyle = color;
// 	circle(centerX, centerY, blockSize / 2, true);
// };
// // Проверяем, находится ли эта ячейка в той же позиции, что и ячейка
// // otherBlock
// Block.prototype.equal = function (otherBlock) {
// 	return this.col === otherBlock.col && this.row === otherBlock.row;
// };
// // Задаем конструктор Snake (змейка)
// const Snake = function () {
// 	this.segments = [
// 		new Block(7, 5),
// 		new Block(6, 5),
// 		new Block(5, 5)
// 	];
// 	this.direction = "right";
// 	this.nextDirection = "right";
// };
// // Рисуем квадратик для каждого сегмента тела змейки
// Snake.prototype.draw = function () {
// 	for (let i = 0; i < this.segments.length; i++) {
// 		this.segments[i].drawSquare("Blue");
// 	}
// };
// // Создаем новую голову и добавляем ее к началу змейки,
// // чтобы передвинуть змейку в текущем направлении
// Snake.prototype.move = function () {
// 	const head = this.segments[0];
// 	let newHead;
// 	this.direction = this.nextDirection;
// 	if (this.direction === "right") {
// 		newHead = new Block(head.col + 1, head.row);
// 	} else if (this.direction === "down") {
// 		newHead = new Block(head.col, head.row + 1);
// 	} else if (this.direction === "left") {
// 		newHead = new Block(head.col - 1, head.row);
// 	} else if (this.direction === "up") {
// 		newHead = new Block(head.col, head.row - 1);
// 	}
// 	if (this.checkCollision(newHead)) {
// 		gameOver();
// 		return;
// 	}
// 	this.segments.unshift(newHead);
// 	if (newHead.equal(apple.position)) {
// 		score++;
// 		apple.move();
// 	} else {
// 		this.segments.pop();
// 	}
// };
// // Проверяем, не столкнулась ли змейка со стеной или собственным
// // телом
// Snake.prototype.checkCollision = function (head) {
// 	let leftCollision = (head.col === 0);
// 	let topCollision = (head.row === 0);
// 	let rightCollision = (head.col === widthInBlocks - 1);
// 	let bottomCollision = (head.row === heightInBlocks - 1);
// 	let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
// 	let selfCollision = false;
// 	for (let i = 0; i < this.segments.length; i++) {
// 		if (head.equal(this.segments[i])) {
// 			selfCollision = true;
// 		}
// 	}
// 	return wallCollision || selfCollision;
// };
// // Задаем следующее направление движения змейки на основе нажатой
// // клавиши
// Snake.prototype.setDirection = function (newDirection) {
// 	if (this.direction === "up" && newDirection === "down") {
// 		return;
// 	} else if (this.direction === "right" && newDirection === "left") {
// 		return;
// 	} else if (this.direction === "down" && newDirection === "up") {
// 		return;
// 	} else if (this.direction === "left" && newDirection === "right") {
// 		return;
// 	}
// 	this.nextDirection = newDirection;
// };
// // Задаем конструктор Apple (яблоко)
// const Apple = function () {
// 	this.position = new Block(10, 10);
// };
// // Рисуем кружок в позиции яблока
// Apple.prototype.draw = function () {
// 	this.position.drawCircle("LimeGreen");
// };
// // Перемещаем яблоко в случайную позицию
// Apple.prototype.move = function () {
// 	const randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
// 	const randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
// 	this.position = new Block(randomCol, randomRow);
// };
// // Создаем объект-змейку и объект-яблоко
// const snake = new Snake();
// const apple = new Apple();
// // Запускаем функцию анимации через setInterval
// const intervalId = setInterval(function () {
// 	ctx.clearRect(0, 0, width, height);
// 	drawScore();
// 	snake.move();
// 	snake.draw();
// 	apple.draw();
// 	drawBorder();
// }, 100);
// // Преобразуем коды клавиш в направления
// const directions = {
// 	37: "left",
// 	38: "up",
// 	39: "right",
// 	40: "down"
// };
// // Задаем обработчик события keydown (клавиши-стрелки)
// $("body").keydown(function (event) {
// 	const newDirection = directions[event.keyCode];
// 	if (newDirection !== undefined) {
// 		snake.setDirection(newDirection);
// 	}
// });