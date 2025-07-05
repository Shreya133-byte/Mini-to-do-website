const taskInput = document.getElementById("taskInput");
const durationInput = document.getElementById("durationInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  const duration = durationInput.value.trim();

  if (task === "" || duration === "" || duration <= 0) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = task;

  const details = document.createElement("div");
  details.className = "task-details";
  details.appendChild(span);

  const durationTag = document.createElement("span");
  durationTag.className = "task-duration";
  durationTag.innerText = `⏱ ${duration} min`;
  details.appendChild(durationTag);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerText = "🗑️";

  deleteBtn.addEventListener("click", () => li.remove());

  //for completing the task it will cross the todo item name....
  li.addEventListener("click", (e) => {
    if (e.target !== deleteBtn) {
      li.classList.toggle("completed");
    }
  });

  li.appendChild(details);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  durationInput.value = "";
});
