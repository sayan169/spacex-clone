'use strict';
const hamburger = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('menu-btn');
const counters = document.querySelectorAll('.counter');

let scrollStarted = false;

document.addEventListener('scroll', scrollPage);


const eventToggle = () => {
    hamburger.classList.toggle('open');
    overlay.classList.toggle('show-overlay');
    document.body.classList.toggle('stop-scrolling');
}

hamburger.addEventListener('click', eventToggle);
overlay.addEventListener('click', eventToggle);

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
});

function scrollPage() {
    const yPos = window.scrollY;
    if(yPos > 100 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }

    else if(yPos < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}

function countUp(){
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            //Get the count target
            const target = Number(counter.getAttribute('data-target'));
            //Get the current count value
            const currentCount = Number(counter.innerText);

            //Create an increment
            const increment = target/100;
            //Logic
            if(currentCount < target){
                counter.innerText = `${Math.ceil(currentCount + increment)}`;
                setTimeout(updateCounter,50);
            }
            else{
                counter.innerText = target;
            }
        }

        updateCounter();

    });
    
}

function reset(){
    counters.forEach((counter) => counter.innerHTML = '0');
}



//if overlay.classList.contains('show-overlay') then addEventListener to menuBtn and add the class ''

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('open');
// });