'use strict';
/* =========== making random letters ============ */

const allOptions = document.querySelectorAll('option');

function generateLetters() {
	const alfabet = 'abcdefghijklmnopqrstuvwxyz';
	const letters = alfabet.split('');
	const shortArray = [];
	let randomNumber;
	let j = 25;
	const nameList = [];

	for (let i = 0; i <= 5; i++) {
		randomNumber = Math.round(Math.random() * j);
		shortArray.push(letters[randomNumber]);
		letters.splice(randomNumber, 1);
		j--;
	}

	let t = 0;
	for (let i of allOptions) {
		i.innerText = shortArray[t];
		i.setAttribute('value', shortArray[t]);
		t++;
	}
}

/* ============= created onload function =========== */

document.addEventListener('DOMContentLoaded', generateLetters());

/* ============= created fetch API =========== */

async function getJsonData() {
	const response = await fetch('list.json');
	const data = await response.json();
}

/* ============== generating json lists ============== */
