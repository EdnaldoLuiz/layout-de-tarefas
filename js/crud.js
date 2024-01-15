function addTask(time) {
    var input;
    var ul;
    var tasksArray;
  
    if (time === 'day') {
      input = document.getElementById('new-day-task');
      ul = document.getElementById('day-tasks');
      tasksArray = tarefasDia;
    } else if (time === 'night') {
      input = document.getElementById('new-night-task');
      ul = document.getElementById('night-tasks');
      tasksArray = tarefasNoite;
    }
  
    var taskName = input.value;
  
    if (taskName !== '') {
      var li = document.createElement('li');
      li.textContent = taskName;
  
      var removeIcon = document.createElement('i');
      removeIcon.className = 'fas fa-trash-alt';
      removeIcon.addEventListener('click', removeTask);
      li.appendChild(removeIcon);
  
      ul.appendChild(li);
      tasksArray.push(taskName); // Adiciona a nova tarefa ao array correspondente
      input.value = '';
    }
  }
  