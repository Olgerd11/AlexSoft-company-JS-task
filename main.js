'use strict';
/* =========== general constants ============ */

const allOptions = document.querySelectorAll('option');
const select = document.querySelector('select');

/* =========== making random letters ============ */

function generateLetters() {
	const alfabet = 'abcdefghijklmnopqrstuvwxyz';
	const letters = alfabet.split('');
	const shortArray = [];
	let randomNumber;

	let j = 25;
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

/* ============= created fetch API request =========== */

async function getJsonData() {
	const response = await fetch('list.json');
	const data = await response.json();

	document.querySelector('ol').remove();
	const list = document.createElement('ol');
	document.querySelector('.container').appendChild(list);

	document.querySelector('p').remove();
	const paragraph = document.createElement('p');
	document.querySelector('.container').appendChild(paragraph);

	for (let i of data) {
		if (this.value === i.name[0].toLowerCase()) {
			let appendElement = document.createElement('li');
			document.querySelector('ol').appendChild(appendElement);
			appendElement.textContent = `${i.name}`;
		}
	}

	if (!document.querySelector('li')) {
		const warning = document.querySelector('p');
		document.querySelector('.container').appendChild(warning);
		warning.textContent = 'The list does not contain names beginning with this letter';
	}
}

/* ============ added listeners ============== */

select.addEventListener('focus', getJsonData);
select.addEventListener('change', getJsonData);
