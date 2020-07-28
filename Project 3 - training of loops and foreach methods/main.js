const btn = document.querySelector('button');

let fontSize = 10;

const liItems = document.querySelectorAll('li');
// cont liItems = [...document.getElementsByTagName('li')];

btn.addEventListener('click', () => {
    for (let i = 0; i < liItems.length; i++) {
        liItems[i].style.fontSize = `${fontSize}px`;
        liItems[i].style.display = 'block';
    }
    fontSize++;
    liItems.forEach((li) => {
        li.style.fontSize = `${fontSize}px`;
    })
})