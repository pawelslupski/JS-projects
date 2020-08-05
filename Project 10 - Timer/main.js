const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `Aktualny stan licznika kliknięć to ${number}`;
    }
}

const counter = add();
document.addEventListener('click', counter);

const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwa'}`);
    }

    return showName;
}

const mieszko = user("Mieszko", 20);
const jagienka = user("Jagienka", 17);

mieszko();
jagienka();


function clock() {
    let seconds = 0;

    timer = () => {
        seconds++;
        document.body.textContent = seconds === 1 ? `Upłynęła już ${seconds} sekunda` : `Upłynęło już ${seconds} sekund`;
    }
    return timer;
}

const start = clock();

setInterval(start, 1000);