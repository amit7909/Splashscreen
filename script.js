window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Adjust the time (in milliseconds) as needed
});
