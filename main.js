'use strict';

/* =========== making random letters */

const firstOption = document.querySelector('#opt1');
const secondOption = document.querySelector('#opt2');
const thirdOption = document.querySelector('#opt3');
const fourthOption = document.querySelector('#opt4');
const fifthOption = document.querySelector('#opt5');
const sixthOption = document.querySelector('#opt6');

const generateLetters = () => {
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

	firstOption.setAttribute('value', shortArray[0]);
	secondOption.setAttribute('value', shortArray[1]);
	thirdOption.setAttribute('value', shortArray[2]);
	fourthOption.setAttribute('value', shortArray[3]);
	fifthOption.setAttribute('value', shortArray[4]);
	sixthOption.setAttribute('value', shortArray[5]);

	firstOption.innerText = shortArray[0];
	secondOption.innerText = shortArray[1];
	thirdOption.innerText = shortArray[2];
	fourthOption.innerText = shortArray[3];
	fifthOption.innerText = shortArray[4];
	sixthOption.innerText = shortArray[5];
};

/* ============= created fetch API =========== */

const requestURL = 'list.json';

async function getJsonData() {
	const response = await fetch(requestURL);
	const data = await response.json();
	console.log(data);
}

/* ============= working with form =========== */

document.addEventListener('DOMContentLoaded', generateLetters());
