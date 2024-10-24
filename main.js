window.addEventListener("load", () => {
    const form = document.querySelector("#newTaskForm");
    const input = document.querySelector("#newTaskInput"); 
    const listElement = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value;

        if (task === "") {
            alert("Please enter a task");
        } else {
            // Create task element
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");

            // Create content div
            const taskContent = document.createElement("div");
            taskContent.classList.add("content");

            // Append content div to task element
            taskElement.append(taskContent);

            // Create and configure task input
            const taskInput = document.createElement("input");
            taskInput.value = task;
            taskInput.classList.add("text");
            taskInput.type = "text";
            taskInput.setAttribute("readonly", "readonly");

            // Append task input to content div
            taskContent.append(taskInput);

            // Create edit and delete buttons
            const taskEditDelete = document.createElement("div");
            taskEditDelete.classList.add("editDelete");

            // Create edit button (pencil icon)
            const taskEdit = document.createElement("i");
            taskEdit.classList.add("fa-solid", "fa-pencil");

            // Create delete button (trash icon)
            const taskDelete = document.createElement("i");
            taskDelete.classList.add("fa-solid", "fa-trash");

            // Append edit and delete buttons to taskEditDelete div
            taskEditDelete.append(taskEdit);
            taskEditDelete.append(taskDelete);

            // Append taskEditDelete div to task element
            taskElement.append(taskEditDelete);

            // Append task element to the task list
            listElement.append(taskElement);

            // Clear the input after submitting
            input.value = "";

            // Add functionality to edit button 
            taskEdit.addEventListener("click", () => {
                if (taskInput.hasAttribute("readonly")) {
                    taskInput.removeAttribute("readonly");
                    taskInput.focus();
                } else {
                    taskInput.setAttribute("readonly", "readonly");
                }
            });

            // Add functionality to delete button
            taskDelete.addEventListener("click", () => {
                listElement.removeChild(taskElement);
            });
        }
    });
});
