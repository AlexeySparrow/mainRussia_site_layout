/* play video in lastVideo section */

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
const scrollLine = document.getElementById('scrollLine');
const widthScroll = document.getElementById('widthScroll');

// window.onload = () => {
//     widthScroll.style.width = slider.clientWidth + 'px';
// };

buttonLeft.onclick = () => {
    slider.scrollLeft -= 300;
};
buttonRight.onclick = () => {
    slider.scrollLeft += 300;
};

scrollLine.onscroll = function () {
    slider.scrollLeft = scrollLine.scrollLeft;
};
slider.onscroll = function () {
    scrollLine.scrollLeft = slider.scrollLeft;
};


