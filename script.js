// TASK MANAGER APP
// taskManager object
const taskManager = {
  // an array that hold all tasks.
  tasks: [],
  idCounter: 1,
// Method adds a new task to the tasks array
addTask: function() {
  const taskDescription = prompt('Add task description, then click OK.');
  // Remove whitespace then chcek if task is empty or a number
  if ((taskDescription.trim() === "") || (!isNaN(taskDescription))) {
    alert('Task can not be empty or a number!' );
    return;
  }
  // define the task object
  const newTask = {
    id: this.idCounter++,
    description: taskDescription,
    completed: false,
  };
  // add the task to the tasks array
  this.tasks.push(newTask);   
  alert('Task Added Successfully! \nClick OK To Main Menu:');
  
}, 
// Method that marks a task as completed
completeTask: function() {
  const taskId = parseInt(
    prompt('Enter the task ID to complete, then click OK. ')
  );
  const task = this.tasks.find(task => task.id === taskId);
  if (!task) {
    alert('Sorry! Task not found.');
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
      case 1 : taskManager.addTask(); // Call method addTask()
                break;
      case 2 : taskManager.completeTask(); // Call method completeTask()
                break;
      case 3 : taskManager.listAllTasks();  // Call methon listAllTasks()
                break;
      case 4 : taskManager.listCompletedTasks();  // Call method listCompletedTasks()
                break;
      case 5 : alert('Thanks For Using Task Manager. \nGoodbye!'); // Exiting Task Manager
                return;
      default: alert('Invalid! Please select a valid option.');
                break;
    }  
// Keep displaying menu untill user chooses to exit
menu();
}
// End of function menu()   

// function for asking the user to fill in their name
function askUserName() {
  const userName = prompt('Please Enter Your Name: ');
  // Remove whitespace then check for en emply string or a number
  if ((userName.trim() ===   "") || (!isNaN(userName))) {
    alert('User name can not be EMPTY or a NUMBER! \nPlease Enter Your Name: ');
    // Recursive call if user name is empty or a number
    askUserName();
  } else {
    alert(`Welome To Task Manager ${userName}  \nStart Using Click OK: `);
    // Call function menu()
    menu();
  }  
}
// End of function askUserName()

// starts with the function asKUserName() which triggers the menu() function
askUserName();