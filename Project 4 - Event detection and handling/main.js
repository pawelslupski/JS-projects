const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    h1.textContent = `${x}, ${y}`;

    const red = x / width * 255;
    const green = y / height * 255;
    const blue = ((x / width * 255) + (y / height * 255)) / 2;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${red / green})`;
})