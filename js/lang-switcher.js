document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('language-button');
    const languageOptions = document.getElementById('language-options');


    languageButton.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block'; // Переключаем видимость
    });

    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang'); // 
            languageButton.innerHTML = selectedLang === 'ru' ? 'Ru <span class="arrow">▼</span>' : 'En <span class="arrow">▼</span>';
            languageOptions.style.display = 'none'; // Скрываем опции
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.language-switcher')) {
            languageOptions.style.display = 'none'; // Скрываем выпадающее меню
        }
    });
});