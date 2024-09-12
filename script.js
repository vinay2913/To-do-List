// script.js
function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const taskList = document.getElementById("taskList");

    if (taskInput) {
        const listItem = document.createElement("li");
        listItem.textContent = taskInput;
        taskList.appendChild(listItem);
        document.getElementById("taskInput").value = "";
    }
}
