let red = 100;
let blue = 100;
let green = 100;

document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;

const changeColor = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, ${blue < 255 ? ++blue : blue}, ${green < 255 ? ++green : green})`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${blue > 0 ? --blue : blue}, ${green > 0 ? --green : green})`;
            break;
    }
}

window.addEventListener('keydown', changeColor);