import { useState } from "react";
import useModal from "../hooks/useModal";
import useTasks from "../hooks/useTasks";

const EditModal = () => {
  const { getTask, editTask } = useTasks();
  const { taskId, setTaskId, setShowModal } = useModal();

  const taskTitle = getTask(taskId).title;

  const [input, setInput] = useState(taskTitle);
  const [error, setError] = useState("");

  const handleEditTask = (e) => {
    e.preventDefault();
    if (input) {
      editTask(taskId, input);
      setError("");
      setTaskId(null);
      setShowModal(null);
    } else {
      setError("title name can't be empty");
    }
  };

  const hadleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value) {
      setError("");
    } else {
      setError("title name can't be empty");
    }
  };

  return (
    <section className="background">
      <form
        action=""
        className="task-form "
      >
        <h2 className="tasks-tilte">Edit Task</h2>
        <label htmlFor="task-name">Task name</label>
        <input
          type="text"
          name="task"
          id="task-name"
          value={input}
          autoFocus={true}
          onChange={hadleInputChange}
        />
        <small className="error-msj">{error}</small>
        <div className="form-actions">
          <button
            type="button"
            className="form-btn cancel"
            onClick={() => setShowModal(null)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="form-btn add"
            onClick={handleEditTask}
          >
            Edit
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditModal;
