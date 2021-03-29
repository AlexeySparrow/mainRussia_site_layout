/* cursor style */

let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
};

let links = Array.from(document.querySelectorAll('a, .lastVideo__click-for-video'));

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

/* lay video in lastVideo section */

const playVideo = (filename, idVideo, divVideo, frameVideo) => {
    // https://www.youtube.com/watch?v=5lCRsLjMeso => fileName = 5lCRsLjMeso
    document.getElementById(idVideo).style.display = 'none';
    document.getElementById(divVideo).style.display = 'block';
    document.getElementById(frameVideo).src = "https://www.youtube.com/embed/" + filename;
};

/* slider */

const buttonLeft = document.getElementById('arrowLeft');
const buttonRight = document.getElementById('arrowRight');
const slider = document.getElementById('slider');

buttonLeft.onclick = () => {
    slider.scrollLeft -= 300;
}
buttonRight.onclick = () => {
    slider.scrollLeft += 300;
}

