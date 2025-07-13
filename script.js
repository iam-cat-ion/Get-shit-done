let totalXP = 0;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const difficulty = document.getElementById("difficulty").value;
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  let xp = 0;
  if (difficulty === "easy") xp = 5;
  if (difficulty === "medium") xp = 10;
  if (difficulty === "hard") xp = 20;

  li.innerHTML = `${taskText} <button onclick="completeTask(this, ${xp})">✔️</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
}

function completeTask(button, xp) {
  totalXP += xp;
  document.getElementById("xpcount").innerText = totalXP;
  button.parentElement.remove();
  
  confetti({
  particleCount: 150,
  spread: 100,
  angle: 90,
  origin: { x: 0.5, y: 0.3 },
    colors: ['#000000', '#333333', '#999999', '#CCCCCC', '#FFFFFF']
});
}
