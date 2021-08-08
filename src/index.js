import './style.css';
import './style.scss';

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

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        const barGraph = document.querySelector('.bar-graph');
        const graphOne = document.querySelector('.bar-graph-one .bar-one .bar');
        const graphTwo = document.querySelector('.bar-graph-one .bar-two .bar');
        const graphThree = document.querySelector('.bar-graph-one .bar-three .bar');
        const graphFour = document.querySelector('.bar-graph-one .bar-four .bar');
        if ( entry.isIntersecting ) {
            barGraph.style.animation = "fade-in-text 2.2s 0.1s forwards";
            graphOne.style.animation = "show-bar-one 1.2s 0.1s forwards";
            graphTwo.style.animation = "show-bar-two 1.2s 0.2s forwards";
            graphThree.style.animation = "show-bar-three 1.2s 0.3s forwards";
            graphFour.style.animation = "show-bar-four 1.2s 0.4s forwards";
        } else {
            barGraph.style.animation = "none";
            graphOne.style.animation = "none";
            graphTwo.style.animation = "none";
            graphThree.style.animation = "none";
            graphFour.style.animation = "none";
        }
    });
};

const options = {root: null, rootMargin: '0px', threshold: 0};
const obs = new IntersectionObserver(inViewport);

let skText = document.querySelector('.bar-graph-horizontal');

obs.observe(skText, options);
