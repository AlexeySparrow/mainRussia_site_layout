/* cursor style */

let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
};

let links = Array.from(document.querySelectorAll('a, .lastVideo__click-for-video,.select-box .optionDirection,.select-box .optionPlatform,.selected'));

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('grow');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    })
});

/* burger */

const burger = document.getElementById('burger');
const header = document.getElementById('header');

burger.onclick = () => {
    burger.classList.toggle('active');
    header.classList.toggle('active');
}




