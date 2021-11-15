const buyers = document.getElementById('buyers');
let count = 0;

const addBuyer = (name, surname, date, doc) => {

	const container = document.createElement('div');
	container.setAttribute('class', 'buyer');

	container.innerHTML = `
		<span style="display: none">${count}</span>
		<div class="test-5-name">${name}</div>
		<div class="test-5-last">${surname}</div>
		<div class="test-5-dob">${date}</div>
		<div class="test-5-doc">${doc}</div>
		<button class="test-5-remove" onclick="remove(${count})">Удалить</button>
	`;

	buyers.appendChild(container);
	count += 1;
}


const remove = (x) => {
	const arr = Array.from(buyers.children);
	const needed = arr.find(one => one.innerHTML.includes(`>${x}<`));
	buyers.removeChild(needed);
}

addBuyer('Имя', 'Фамилия','11.11.2001', 123);


const getInfo = () => {
	const name = prompt('Введите имя');
	const surname = prompt('Введите фамилию');
	const date = prompt('Введите дату рождения');
	const doc = prompt('Введите ID документа');
	addBuyer(name, surname, date, doc);
}