const createTag = function (tag) {
	const creat = document.createElement(tag);
	document.querySelector(`[placeholder=${tag}]`).style.display = "block";
	creat.innerHTML = document.querySelector(`[placeholder=${tag}]`).value;
	document.getElementById("Tags").appendChild(creat);
}

const arrLi = [];

const createLi = function () {
	document.querySelector("[placeholder='li']").style.display = "inline";
	const creat2 = document.querySelector("[placeholder='li']").value;
	arrLi.push(creat2);
}

function createUl() {

	arrLi.shift();
	const creat3 = document.createElement('ul');

	let str = '';
	for (let i = 0; i < arrLi.length; i++)
		str += "<li>" + arrLi[i] + "</li>";

	creat3.innerHTML = str;
	document.getElementById("Tags").appendChild(creat3);
	document.querySelector("[placeholder='li']").style.display = "none";
	arrLi.length = 0;
	str = '';
}
