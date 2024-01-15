function deleteTask(deleteButton) {
    const listItem = deleteButton.parentNode;
    const taskList = listItem.parentNode;

    taskList.removeChild(listItem);
}

document.addEventListener('DOMContentLoaded', function () {
    const tarefasDia = [
        "Me inscrever em vagas",
        "Tomar café da manhã",
        "Estudar AWS",
        "Escrever resumos sobre AWS",
        "Checar e-mails",
        "Arrumar o quarto",
        "Tomar banho",
        "Revisar projetos",
        "Almoçar",
    ];

    const tarefasNoite = [
        "Avançar em cursos",
        "Publicação no LinkedIn",
        "Realizar desafio 100 days of code",
        "Assistir YouTube",
    ];

    function addTaskToList(task, listId) {
        const taskList = document.getElementById(listId);
        if (taskList) {
            const listItem = document.createElement('li');
    
            const taskText = document.createElement('span');
            taskText.textContent = task;
    
            const deleteButton = document.createElement('span');
            deleteButton.textContent = '❌';
            deleteButton.className = 'delete-task';
            deleteButton.onclick = function () {
                deleteTask(this);
            };
    
            listItem.appendChild(taskText);
            listItem.appendChild(deleteButton);
    
            taskList.appendChild(listItem);
        }
    }    

    function addTask(period) {
        const newTaskInput = document.getElementById(`new-${period}-task`);
        const task = newTaskInput.value.trim();

        if (task !== '') {
            const taskList = document.getElementById(`${period}-tasks`);
            if (taskList) {
                addTaskToList(task, `${period}-tasks`);
                newTaskInput.value = '';
            }
        }
    }

    const addDayTaskButton = document.querySelector('#add-day-task-button');
    const addNightTaskButton = document.querySelector('#add-night-task-button');

    if (addDayTaskButton) {
        addDayTaskButton.addEventListener('click', function () {
            addTask('day');
        });
    }

    if (addNightTaskButton) {
        addNightTaskButton.addEventListener('click', function () {
            addTask('night');
        });
    }

    const dayTasksList = document.getElementById('day-tasks');
    if (dayTasksList) {
        for (const task of tarefasDia) {
            addTaskToList(task, 'day-tasks');
        }
    }

    const nightTasksList = document.getElementById('night-tasks');
    if (nightTasksList) {
        for (const task of tarefasNoite) {
            addTaskToList(task, 'night-tasks');
        }
    }
});
