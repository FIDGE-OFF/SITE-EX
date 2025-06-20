document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    
    // Зміна мови
    languageSelector.addEventListener('change', function() {
        const selectedLanguage = this.value;
        changeLanguage(selectedLanguage);
    });
    
    // Можна додати збереження вибраної мови в localStorage
});

function changeLanguage(lang) {
    const translations = {
        uk: {
            'site-title': 'Українські Новини',
            'search-placeholder': 'Пошук новин...',
            'all-tags': 'Усі теги',
            'search-button': 'Пошук',
            'footer-text': '© 2023 Українські Новини. Усі права захищені.',
            'loading': 'Завантаження новин...',
            'no-results': 'Новин не знайдено.'
        },
        en: {
            'site-title': 'Ukrainian News',
            'search-placeholder': 'Search news...',
            'all-tags': 'All tags',
            'search-button': 'Search',
            'footer-text': '© 2023 Ukrainian News. All rights reserved.',
            'loading': 'Loading news...',
            'no-results': 'No news found.'
        }
    };
    
    // Оновлюємо текст на сторінці
    document.getElementById('site-title').textContent = translations[lang]['site-title'];
    document.getElementById('search-input').placeholder = translations[lang]['search-placeholder'];
    document.querySelector('#tag-filter option[value=""]').textContent = translations[lang]['all-tags'];
    document.getElementById('search-button').textContent = translations[lang]['search-button'];
    document.getElementById('footer-text').textContent = translations[lang]['footer-text'];
    
    // Оновлюємо вже завантажені елементи
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.textContent = translations[lang]['loading'];
    }
    
    const noResultsElement = document.querySelector('.no-results');
    if (noResultsElement) {
        noResultsElement.textContent = translations[lang]['no-results'];
    }
}