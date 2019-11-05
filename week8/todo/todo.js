let container = undefined;

const row = `
    <tr>
        <td><input type="text"></td>
        <td><input type="checkbox"></td>
    </tr>`;

function startTodo(startContainer) {
    container = startContainer;
}

function addTodo() {
    container.innerHTML += row;
    const openTasksEl = document.getElementById('numberOfTasks');
    openTasksEl.innerText = Number(openTasksEl.innerText) + 1;
}
