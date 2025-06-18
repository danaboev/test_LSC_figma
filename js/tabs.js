document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.service__tab-button');
	const tabs = document.querySelectorAll('.service__tab');

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const targetTab = button.getAttribute('data-tab');
			buttons.forEach(btn => btn.classList.remove('active'));
			tabs.forEach(tab => tab.classList.remove('active'));
			button.classList.add('active');
			document.getElementById(targetTab).classList.add('active');
		});
	});
	buttons[3].click();
});