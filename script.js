/* ==========================================================================
   DARK MODE TOGGLE LOGIC
   ========================================================================== */

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check for saved user preference in local storage
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggle.textContent = '☀️'; // Change icon to Sun if in dark mode
    }
}

// 2. Add event listener to the toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the class on the body
    body.classList.toggle('dark-mode');
    
    // Update the icon and save preference
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
    
    // Save to local storage so it persists on page refresh
    localStorage.setItem('theme', theme);
});