
function filterPendingTaks(tasks) {
  return tasks.filter((t) => !t.completed);
}

const tasks = [
  { task: "Wash the dishes", completed: true },
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false },
  { task: "Clean the house", completed: true },
];

const result = filterPendingTaks(tasks);
console.log(result);
/**
 * // Pending tasks
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false }
 */
