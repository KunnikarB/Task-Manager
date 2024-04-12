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
// Method that lists only completed tasks
listCompletedTasks: function () {
  console.log('completed tasks:');
  const completedTasks = this.tasks.filter(
    task => task.completed);
    completedTasks.forEach(task => {
      console.log(`ID: ${task.id}, Description: ${task.description}`);
    });  
}
};
// End of taskManager object
//function displays a menu with different choices for the user
function menu() {
  const choice = parseInt(prompt(
      `Please select an options: (1-5) then click Ok:
      1. Add Task
      2. Complete a Tasks
      3. List All Tasks
      4. List Completed Tasks
      5. Exit Task Menager`
    ));
    switch (choice) {
      case 1 :
        const taskDescription = prompt('Add task description, then click OK.');
        // Call method addTask()
        taskManager.addTask(taskDescription);
        break;
      case 2 :
        const taskId = parseInt(
          prompt('Enter the task ID to complete, then click OK. ')
        );
        // Call method completeTask()
        taskManager.completeTask(taskId);
        break;
      case 3 :
        // Call methon listAllTasks()
        taskManager.listAllTasks();
        break;
      case 4 :
        // Call method listCompletedTasks()
        taskManager.listCompletedTasks();
        break;
      case 5 :
        // Exiting Task Manager
        alert('Thanks For Using Task Manager. \nGoodbye!');
        return;
      default:
        alert('Invalid! Please select a valid option.');
        break;
    }  
// Keep displaying menu untill user chooses to exit
menu();
}
// End of function menu()      
// function for asking the user to fill in their name
function askUserName()