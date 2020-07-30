const actions = ["walcz", "przemyśl to jeszcze raz", "nie mam pojęcia, weź się ogarnij", "walnij baranka w ścianę z lekkim przytupem"];

const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');

const input = document.querySelector('input');

const h1 = document.querySelector('h1');

const showActionBtn = document.querySelector('.showAction');
const showActionsBtn = document.querySelector('.showActions');

const addAction = (e) => {
    e.preventDefault();
    const newAction = input.value;
    if (newAction.length) {
        actions.push(newAction);
        console.log(actions);
        input.value = "";
        alert(`dodana została opcja ${input.value}`);
    }
}

const resetActions = (e) => {
    e.preventDefault();
    // actions.splice(0, actions.length);
    actions.length = 0;
    console.log(actions);
    h1.textContent = "";
    input.value = "";
}

const showAction = () => {
    const index = Math.floor(Math.random() * actions.length);
    h1.textContent = actions[index];
}

const showActions = () => {
    alert(actions.join(", "));
}

addBtn.addEventListener('click', addAction);
resetBtn.addEventListener('click', resetActions);

showActionBtn.addEventListener('click', showAction);
showActionsBtn.addEventListener('click', showActions);