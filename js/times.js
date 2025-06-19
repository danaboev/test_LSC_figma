document.addEventListener('DOMContentLoaded', () => {
    const timeOptions = document.querySelectorAll('.service__time-option');

    timeOptions.forEach(option => {
        option.addEventListener('click', () => {
            //deactivate
            timeOptions.forEach(opt => opt.classList.remove('active'));
            //activate
            option.classList.add('active');
        });
    });
    timeOptions[0].click();
});