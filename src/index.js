document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("create-task-form").addEventListener("submit", submitButtonHandler);
});

let submitButtonHandler = event => {
    event.preventDefault();
    let taskInput = document.getElementById("new-task-description");
    if (taskInput.value === "") {
        return;
    }

    let task = document.createElement("li");
    task.innerHTML = taskInput.value;
    taskInput.value = "";

    let taskList = document.getElementById("tasks");
    taskList.appendChild(task);
}
