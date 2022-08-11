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
  e.preventDefault();
}
