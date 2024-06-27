const taskBox = document.getElementById("task-box");
const taskContainer = document.getElementById("task-container");

function addTask() {
    if (taskBox.value === '') {
        alert("You Need To Write Task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskBox.value = "";
    saveTask();
}

taskContainer.addEventListener("click", function(n) {
    if (n.target.tagName === "LI") {
        n.target.classList.toggle("checked");
        saveTask();
    } else if (n.target.tagName === "SPAN") {
        n.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask(){
    localStorage.setItem("task", taskContainer.innerHTML);
}

function showTask(){
    taskContainer.innerHTML = localStorage.getItem("task")
}
showTask();