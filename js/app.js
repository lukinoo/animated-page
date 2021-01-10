const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const button = document.querySelector('.btn');
const mainSection = document.querySelector('.background-image');
const loadingBar = document.querySelector('.container');

// function for navigation bar open and close
function navLinkOpen() {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    })
};


function loadingPage() {
    button.addEventListener('click', function() {
        button.style.display = 'none';
        loadingBar.classList.add('container-fade-out');
        setTimeout(() => {
            loadingBar.style.display = 'none';
            mainSection.style.display = 'block';
        }, 5000);
    })
};


loadingPage();
navLinkOpen();