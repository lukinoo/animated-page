const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const button = document.querySelector('.btn');
const loadingBar = document.querySelector('.container');
const mainSection = document.querySelector('.main-section');


function navLinkOpen() {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    })
}


function loadingPage() {
    
}

navLinkOpen();