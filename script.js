const now = new Date();
const secondsInDay = 86400000;
const scoreDay = 50;
const scorePeople = 25;

const date = document.getElementById('calc-date');
const amount = document.getElementById('calc-amount');
const profit = document.getElementById('calc-profit');
const desc = document.getElementById('desc-profit');

const count = () => {

	const dValue = date.value;
	if (!dValue) return 'Пожалуйста, выберите дату';

	const d = new Date(dValue);
	if (d < now) return 'Дата не может быть в прошлом';

	const aValue = parseInt(amount.value);
	if (aValue < 1 || aValue > 5 || Number.isNaN(aValue)) return 'Кол-во билетов может быть от 1 до 5';

	const days = parseInt((d - now) / secondsInDay) + 1;
	const scores = days * scoreDay + aValue * scorePeople;
	profit.value = scores;

	return `Ваши баллы: +${scores} баллов: +${scoreDay} за каждый день и +${scorePeople} за каждый билет`;
}

[ date, amount ].forEach(one => one.addEventListener('change', () => {
	desc.textContent = count();
}));