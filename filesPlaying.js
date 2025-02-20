const fs = require("fs");

const allTasks = fs.readFileSync("awadTasks.md", "utf-8");
const tasks = allTasks.split("\n");

function filterTasks() {
  const completedTasks = [];
  const uncompletedTasks = [];

  for (const task of tasks) {
    if (!task.includes("[x]")) {
      uncompletedTasks.push(task);
    }

    if (!task.includes(`[ ]`)) {
      completedTasks.push(task);
    }
  }

  fs.writeFileSync("completedTasks.md", completedTasks.join("\n"), "utf-8");
  fs.writeFileSync("uncompletedTasks.md", uncompletedTasks.join("\n"), "utf-8");
}

filterTasks();

console.log(allTasks);
