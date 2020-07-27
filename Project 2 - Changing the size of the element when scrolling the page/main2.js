document.body.style.height = "10000px";

let size = 100;
let growRect = true;

const nav = document.createElement('div');
nav.style.width = '100%';
nav.style.color = 'red';
nav.style.position = 'fixed';
nav.style.left = '0';
nav.style.top = '0';
nav.style.backgroundColor = 'green';
nav.style.height = size + 'px';

const changeHeight = function() {
    if (size > window.innerHeight / 2) {
        growRect = !growRect;
    } else if (size <= 0) {
        growRect = !growRect;
    }

    if (growRect) {
        size += 10;
        nav.style.backgroundColor = 'green';
    } else {
        size -= 10;
        nav.style.backgroundColor = 'red';
    }
    nav.style.height = size + 'px';
}

document.body.appendChild(nav);

window.addEventListener('scroll', changeHeight);