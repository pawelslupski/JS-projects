const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Dobrusia", "Jagienka", "Marysia", "Ewa", "Bogumiła", "Magda", "Ola"];

const prefixes = ["Wydaje mi się", "Mam wrażenie", "Myślę", "Szczerze uważam", "Jestem przekonany"];

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixes.length);
    div.textContent = `${prefixes[indexPrefix]}, że najlepsze imię to: ${names[indexName]}`;
}

btn.addEventListener('click', nameGenerator);