// IMPORTING DEPENDENCIES
const currentDate = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED);
// TESTING
console.log("CURRENT TIME WITH LUXON:", currentDate);

const form = document.getElementById('task_form');

document.getElementById("current_time").textContent = currentDate;

// ADDING TASKS FUNCTION
function addTask(event){
    event.preventDefault();

    // GRABBING THE VALUES FROM THE ELEMENTS
    const taskText = document.getElementById('task_input').value;
    const category = document.getElementById('task_category').value;

    // CREATING THE HEADING TASK
    const h3 = document.createElement("h3");
    h3.textContent = taskText;

    // CREATING THE CATEGORY
    const p = document.createElement("p");
    p.textContent = category;

    // CREATING THE LIST
    const li = document.createElement("li")

    // MAKING A DELETE BUTTON
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete Task"
    deleteButton.classList.add("delete-button")

    deleteButton.addEventListener("click", deleteTask)

    // PUTTING THE TASK AND CATEGORY ONTO THE PAGE
    const taskList = document.querySelector(".tasks");
    taskList.appendChild(li);

    // COUNTING THE TASKS WITH RECURSION
    const allTasks = document.querySelectorAll(".tasks li");
    const taskNumber = countTasks(allTasks)

    // PUTTING THE NUMBER INTO TASK 
    const number = document.createElement("h4");
    number.textContent = "Task #" + taskNumber;

    // MARK FINISHED
    li.append(number)
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(deleteButton);
}

// DELETE TASK BASED ON THE PARENT ELEMENT
function deleteTask(event){
    event.target.parentElement.remove()
}

// CATEGORY LOOP
document.getElementById("category_filter").addEventListener("change", filterTasks);

function filterTasks(event){
    const selectedCategory = event.target.value;
    const tasks = document.querySelectorAll(".tasks li")

    tasks.forEach(task => {
        const taskCategory = task.querySelector("p").textContent;

        if (selectedCategory === "all" || taskCategory === selectedCategory) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

// RECURSION FUNCTION
function countTasks(listItems, index=0){
    if (index === listItems.length){
        return 0;
    }
    return 1 + countTasks(listItems, index +1);
}

// RUNNING THE ADD TASK WHEN THEY SUBMIT OR PRESS ENTER
form.addEventListener("submit", addTask);


