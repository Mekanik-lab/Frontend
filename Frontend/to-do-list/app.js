document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("header__input");
    const list = document.getElementById("task--list__items");

    function addTask() {
        input.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {  
                const text = input.value.trim(); 

                if (text !== "") {  
                    const newTask = document.createElement("li");
                    newTask.classList.add("task-item");
                    newTask.textContent = text; 
                    list.appendChild(newTask);  
                    input.value = "";  

                    setTimeout(() => {
                        newTask.classList.add("visible");
                    }, 10);

                    addRemoveListener(newTask);
                    saveTasks();
                }
            }
        });
    }

    function addRemoveListener(task) {
        task.addEventListener("contextmenu", (event) => {
            event.preventDefault();  
            task.remove();  
            saveTasks();
        });
    }

    function saveTasks() {
        const tasks = [];
        const taskItems = document.querySelectorAll('.task-item');
        
        taskItems.forEach(task => {
            tasks.push(task.textContent); 
        });
        
        localStorage.setItem("tasks", tasks.join(","));
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            const tasks = savedTasks.split(",");
            tasks.forEach(taskText => {
                const newTask = document.createElement("li");
                newTask.classList.add("task-item");
                newTask.textContent = taskText; 
                list.appendChild(newTask);
                setTimeout(() => {
                    newTask.classList.add("visible");
                }, 10);

                addRemoveListener(newTask);
            });
        }
    }

    function showRules() {
        const openButton = document.getElementById("main__button--rules");
        const overlay = document.getElementById("overlay");
        const card = document.getElementById("div__card--rules");

        openButton.addEventListener("click", () => {
            overlay.style.display = "flex";
            card.style.display = "flex";
        });
    }

    function hideRules() {
        const closeButton = document.getElementById("close-button");
        const overlay = document.getElementById("overlay");
        const card = document.getElementById("div__card--rules");

        closeButton.addEventListener("click", () => {
            overlay.style.display = "none";
            card.style.display = "none";
        });
    }

    loadTasks();
    showRules();
    hideRules();
    addTask();
});
