const themeToggle = document.getElementById('themeToggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Update button text
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'light mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = 'dark mode';
        localStorage.setItem('theme', 'light');
    }
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = 'light mode';
    } else {
        themeToggle.textContent = 'dark mode';
    }
}

themeToggle.addEventListener('click', toggleDarkMode);
loadSavedTheme();
