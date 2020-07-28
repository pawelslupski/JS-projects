const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', function(e) {
    // console.log(e.clientX, e.clientY);
    h1.textContent = `${e.clientX}, ${e.clientY}`;
})