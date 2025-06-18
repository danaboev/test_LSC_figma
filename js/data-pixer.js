document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('date'); 
	const calendar = document.getElementById('calendar'); 

	input.addEventListener('focus', () => {
		calendar.style.display = 'block'; 
		renderCalendar(); 
	});

	document.addEventListener('click', (event) => {
		if (!event.target.closest('.service__date-picker')) {
			calendar.style.display = 'none'; 
		}
	});

	//genetare calenlad
	function renderCalendar() {
		const today = new Date(); // date on time
		const month = today.getMonth(); 
		const year = today.getFullYear(); 

		const daysInMonth = new Date(year, month + 1, 0).getDate();
		calendar.innerHTML = ''; 

		for (let day = 1; day <= daysInMonth; day++) {
			const dayElement = document.createElement('div'); 
			dayElement.textContent = day; 
			dayElement.addEventListener('click', () => {
				input.value = `${day < 10 ? '0' + day : day}/${month + 1 < 10 ? '0' + (month + 1) : month + 1}/${year}`; // Форматируем дату
				calendar.style.display = 'none';
			});
			calendar.appendChild(dayElement); 
		}
	}
});