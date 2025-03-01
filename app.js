const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
});

// Create a new task
function createTask(text) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${text}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);

    // Delete task
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    // Mark as completed
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
}


/* SECOND */

const taskInput1 = document.getElementById("task1");
const addBtn1 = document.getElementById("add1");
const taskList1 = document.getElementById("taskList1");

// Add task
addBtn1.addEventListener("click", () => {
    const taskText1 = taskInput1.value.trim();
    if (taskText1 !== "") {
        createTask(taskText1);
        taskInput1.value = "";
    }
});

// Create a new task
function createTask(text) {
    const taskItem1 = document.createElement("li");
    taskItem1.innerHTML = `
        <span>${text}</span>
        <button class="delete">Delete</button>
    `;
    taskList1.appendChild(taskItem1);

    // Delete task
    const deleteBtn1 = taskItem1.querySelector(".delete");
    deleteBtn1.addEventListener("click", () => {
        taskItem1.remove();
    });

    // Mark as completed
    taskItem1.addEventListener("click", () => {
        taskItem1.classList.toggle("completed");
    });
}