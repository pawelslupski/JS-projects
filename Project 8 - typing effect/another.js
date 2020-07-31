const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');

const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut officia libero labore id distinctio error id fugiat sit cum reprehenderit necessitatibus alias quisquam fugiat maiores beatae, consectetur autem aspernatur?';

let indexText = 0;
const time = 40;

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);