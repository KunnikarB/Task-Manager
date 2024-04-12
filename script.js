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
// Method that marks a task as completed
completeTask: function(taskId) {
  const task = this.tasks.find(task => task.id === taskId);
  if (!task) {
    alert('Sorry! Task not found.');
    const taskId = parseInt(prompt('Enter task ID to complete, then click OK:'));
    taskManager.completeTask(taskId);
    return;
  }
  task.completed = true;
  alert(`Task ID: ${task.id}, Description: ${task.description} Completed! \n Click OK To Main Menu:`);
  
},
// Method that lists all tasks
listAllTasks: function () {
  console.log('All tasks:');
  this.tasks.forEach(task => {
    console.log(`ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed}`); 
  });
  alert('Click OK To Main Menu:');
},

