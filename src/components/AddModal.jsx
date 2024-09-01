import { useState } from "react";
import useModal from "../hooks/useModal";
import useTasks from "../hooks/useTasks";

const AddModal = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const { addTask } = useTasks();

  const { setShowModal } = useModal();

  const handleAddTask = (e, name) => {
    e.preventDefault();
    if (input) {
      addTask(name);
      setError("");
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
        className="task-form"
      >
        <h2 className="tasks-tilte">Add Task</h2>
        <label htmlFor="task-name">Task name</label>
        <input
          type="text"
          name="task"
          id="task-name"
          value={input}
          onChange={hadleInputChange}
          autoComplete="off"
          autoFocus={true}
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
            className="form-btn add"
            type="submit"
            onClick={(e) => handleAddTask(e, input)}
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddModal;
