// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');

const sentences = ['Siemanko', 'Fajnie, że jesteś:)', 'Zaczynamy...'];

let index = 0;
let letterIndex = 0;

// Implementacja
const addLetter = () => {
    spnText.textContent += sentences[index][letterIndex];
    letterIndex++;
    if (letterIndex === sentences[index].length) {
        index++;
        if (index === sentences.length) return;
        return setTimeout(() => {
            letterIndex = 0;
            spnText.textContent = "";
            addLetter();
        }, 2000);
    };
    setTimeout(addLetter, 100);
}

addLetter(); // pierwsze wywołanie

// Animacja kursora (zostaw bez zmian) 
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400);