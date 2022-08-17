const formTask = document.getElementById("formTask");

formTask.addEventListener("submit", saveTask);

function saveTask(e) {
  let task_name = document.getElementById("task_name").value;
  let description = document.getElementById("description").value;

  const task = {
    task_name,
    description,
  };

  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  //  localStorage.setItem("tasks", JSON.stringify(tasks));

  //console.log(title + " " + description);
  getTask();
  formTask.reset();
  e.preventDefault();
}

function getTask() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let taskView = document.getElementById("tasks");
  if (tasks == null) {
    //alert("No tasks");
    let p = document.createElement("p");
    p.style = "text-align:center; margin-top: 10px";
    p.innerHTML = "No se encotraron tareas";
    taskView.appendChild(p);
  } else {
    taskView.innerHTML = " ";
    tasks.forEach((task) => {
      taskView.innerHTML += `
        <div class="task">
          <p> <span id="title_description">${task.task_name}:</span> ${task.description}</p>
          <a onclick="deleteTask('${task.task_name}')">ELIMINAR</a>
        </div>`;
    });
  }
}

function deleteTask(title) {
  //let index = title;
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task_name == title) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTask();
  //console.log(tasks[0]);
}
const hola = ["Hola", 
"Hola"
];
getTask();
