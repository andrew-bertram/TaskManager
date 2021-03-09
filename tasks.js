// Task Manager

// Variables
let taskManager = true;
let menu;
let tasksList;
let newTasks;
let removeTasks;
let closeManager;

// tasksList = [
//     `Charge Macbook`,
//     `Master JavaScript`
// ];

while (taskManager) {
    menu = prompt(`What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`);
    while (menu === "CLOSE") {
        closeManager = alert(`Thank you for using Task Manager!`);
        // taskManager = false;
        break;
    }
    while (menu === "TASKS") {
        tasksList = alert(`Charge MacBook\nMaster JavaScript`);
        break;
    }
    taskManager = true;
break;
}

