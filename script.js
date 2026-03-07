// Get the button element
const themeToggle = document.getElementById('themeToggle');

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Function to set theme based on saved preference
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Add click event listener to the button
themeToggle.addEventListener('click', toggleDarkMode);

// Load saved theme when page loads
loadSavedTheme();

// Optional: Log when theme changes (for debugging)
themeToggle.addEventListener('click', () => {
    console.log('Theme toggled. Dark mode:', document.body.classList.contains('dark-mode'));
});
