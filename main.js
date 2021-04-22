'use strict';

/* =========== making random letters */

const alfabet = 'abcdefghijklmnopqrstuvwxyz';
const letters = alfabet.split('');
const shortArray = [];
let randomNumber;
let j = 25;
const nameList = [];

const generateLetters = () => {
	for (let i = 0; i <= 5; i++) {
		randomNumber = Math.round(Math.random() * j);
		shortArray.push(letters[randomNumber]);
		letters.splice(randomNumber, 1);
		j--;
	}

	return shortArray;
};

/* ============= working with .json file=========== */

const requestURL = 'list.json';

async function getJsonData() {
	const response = await fetch(requestURL);
	const data = await response.json();
}

getJsonData();
