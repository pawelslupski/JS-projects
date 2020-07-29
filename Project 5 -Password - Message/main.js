const input = document.getElementById('pass');
const div = document.querySelector('.message');

const password = "user";
const message = "Wyjechałam na zawsze";

input.addEventListener('input', (e) => {
    // console.log(e.target.value);
    console.log(this.value);

    // if (password === e.target.value) {
    //     div.textContent = message;
    //     e.target.value = "";
    // } else {
    //     div.textContent = "";
    // }
});

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})