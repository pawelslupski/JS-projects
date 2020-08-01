const slideList = [{
        img: "images/environment.jpg",
        text: "Hello"
    },
    {
        img: "images/polar-bear.jpg",
        text: "It's nice to see you"
    },
    {
        img: "images/smoke.jpg",
        text: "Let's move on"
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');

// Interface
const time = 3000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
}

setInterval(changeSlide, time);

// Implementation