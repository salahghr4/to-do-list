import { useState } from "react";
import useTasks from "../hooks/useTasks";
import Task from "./Task";

const Tasks = () => {
  const { tasks } = useTasks();

  const [filter, setFilter] = useState("all");

  const handleFilterAll = () => setFilter("all");

  const handleFilterDone = () => setFilter("done");

  const handleFilterNotDone = () => setFilter("notDone");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.done;
    if (filter === "notDone") return !task.done;
  });

  return (
    <main>
      <section className="tasks">
        <div className="tasks-head">
          <h2 className="tasks-tilte">My Tasks</h2>
          <div className="filters-wrapper">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={handleFilterAll}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "done" ? "active" : ""}`}
              onClick={handleFilterDone}
            >
              Done
            </button>
            <button
              className={`filter-btn ${filter === "notDone" ? "active" : ""}`}
              onClick={handleFilterNotDone}
            >
              Not Done
            </button>
          </div>
        </div>
        {filteredTasks.map((task, index) => {
          return (
            <Task
              key={task.id}
              index={index + 1}
              task={task}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Tasks;
