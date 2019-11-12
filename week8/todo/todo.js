let container = undefined;

let container;
const row = `
            <tr>
                <td><input type="text"></td>
                <td><input type="checkbox"></td>
            </tr>`;

function startTodo(StartContainer) {
    container = StartContainer;
}

function addTodo() {
    container.innerHTML += row;
    const openTaskElement = document.getElementById('numberOfTasks');
    openTaskElement.innerText = Number(openTaskElement.innerText) + 1;
}
