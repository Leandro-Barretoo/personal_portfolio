import './style.css';

function helloPage() {
    const toShow = document.querySelector('.about-me');
    const toHide = document.querySelector('.hello-page');
    toShow.style.display = 'block';
    toHide.style.display = 'none';
}

const title = document.querySelector('.grettings');
title.addEventListener('mouseenter', (e) => e.target.innerHTML = 'My name is Leandro Barreto');
title.addEventListener('mouseleave', (e) => e.target.innerHTML = 'Hello');

const aboutBtn = document.getElementById('about');

aboutBtn.addEventListener('click', helloPage);
aboutBtn.addEventListener('mouseenter', () => title.innerHTML = 'About Me!');
aboutBtn.addEventListener('mouseleave', () => title.innerHTML = 'Hello');

const workBtn = document.getElementById('work');
workBtn.addEventListener('mouseenter', () => title.innerHTML = 'My work!');
workBtn.addEventListener('mouseleave', () => title.innerHTML = 'Hello');

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('mouseenter', () => title.innerHTML = 'Contact me!');
contactBtn.addEventListener('mouseleave', () => title.innerHTML = 'Hello');