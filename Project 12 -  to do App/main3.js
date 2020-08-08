// const arr = [34, 129, 10, 2935, 42, 56, 87];

// const oddNumbers = arr.filter(number => number % 2);
// const evenNumbers = arr.filter(number => !(number % 2));
// const numbersBiggerThan100 = arr.filter(number => number > 100);

// const double = arr.map(number => number * 2);
// const people = arr.map(number => number + "  osób");

// console.log(oddNumbers);
// console.log(evenNumbers);
// console.log(numbersBiggerThan100);
// console.log(double);
// console.log(people);

// arr.forEach((number, index) => arr[index] = number * 2);

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
}

input.addEventListener('input', searchTask);