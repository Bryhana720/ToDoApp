const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    if(input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;

        // Botón de borrar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        input.value = "";
    }
});

// Agregar tarea con Enter
input.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        addBtn.click();
    }
});
