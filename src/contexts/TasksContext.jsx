import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (name) => {
    const task = {
      id: new Date().valueOf(),
      title: name,
      done: false,
      added_on: new Date().toLocaleString(),
      completed_on: "",
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const editTask = (id, title) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: title,
          };
        } else {
          return task;
        }
      })
    );
  };

  const checkTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
            completed_on: !task.done ? new Date().toLocaleString() : "",
          };
        } else {
          return task;
        }
      })
    );
  };

  const getTask = (id) => {
    return tasks.find((task) => task.id === id);
  };

  const value = {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    checkTask,
    editTask,
    getTask,
  };

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};
