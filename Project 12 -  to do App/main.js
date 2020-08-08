const removeTask = (e) => {
    // e.target.parentNode.style.textDecoration = "line-through";
    // e.target.remove();
    // e.target.parentNode.remove();
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));