let input = document.getElementById("inp");
let tasks = document.querySelector(".tasks");

function ADD() {
    if (input.value.trim() === "") {
        alert("Please enter a task");
    } else {
        let newTask = document.createElement("li");
        newTask.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        tasks.appendChild(newTask);
        input.value = "";

        let trashIcon = newTask.querySelector("i");
        trashIcon.addEventListener("click", function() {
            newTask.remove();
        });
    }
}