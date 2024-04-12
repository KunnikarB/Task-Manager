// TASK MANAGER APP
// taskManager object
const taskManager = {
  // an array that hold all tasks.
  tasks: [],
  idCounter: 1,
// Method adds a new task to the tasks array
addTask: function (description) {
  // Remove whitespace then chcek if task is empty or a number
  if ((description.trim() === "") || (!isNaN(description))) {
    alert('Task can not be empty or a number!' );
    const taskDescrition = prompt('Add task description, then click OK:');
    taskManager.addTask(taskDescrition);
    return;
  }
  // define the task object
  const newTask = {
    id: this.idCounter++,
    description: description,
    completed: false,
  };
  // add the task to the tasks array
  this.tasks.push(newTask);   
  alert('Task Added Successfully! \nClick OK To Main Menu:');
  
},  