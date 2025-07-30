document.addEventListener('DOMContentLoaded', function() {
    // Rotate hero text
    const heroText = document.getElementById('hero-text');
    const words = ['Elegance', 'Minimalism', 'Comfort'];
    let index = 0;

    function rotateText() {
        index = (index + 1) % words.length;
        heroText.innerHTML = `Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span class="highlight">${words[index]}</span>.`;
    }

    setInterval(rotateText, 3000); // Rotate every 3 seconds

    // Carousel for USP items
    const uspContainer = document.querySelector('.usp-container');
    const uspItems = document.querySelectorAll('.usp-item');
    let uspIndex = 0;

    function showUSP() {
        uspContainer.style.transform = `translateX(-${uspIndex * 100}%)`;
        uspIndex = (uspIndex + 1) % uspItems.length;
    }

    setInterval(showUSP, 5000); // Show each USP item for 5 seconds
});