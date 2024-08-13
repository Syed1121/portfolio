// Example: Responsive Navigation Menu
const nav = document.querySelector('nav ul');
const toggleButton = document.createElement('div');
toggleButton.innerHTML = '☰';
toggleButton.style.fontSize = '2rem';
toggleButton.style.cursor = 'pointer';
toggleButton.style.color = 'white';
toggleButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});
document.querySelector('header').appendChild(toggleButton);

// Optional: Close the menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});
