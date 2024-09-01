import useModal from "../hooks/useModal";
import useTasks from "../hooks/useTasks";

export const DeleteModal = () => {
  const { deleteTask } = useTasks();
  const { taskId, setTaskId, setShowModal } = useModal();

  const handleDeleteTask = (e) => {
    e.preventDefault();
    deleteTask(taskId);
    setTaskId(null);
    setShowModal(null);
  };

  return (
    <section className="background">
      <form
        action=""
        className="task-form "
      >
        <h2 className="tasks-tilte">Delete Task</h2>
        <p style={{ textAlign: "center", padding: "0 14px" }}>
          are you sure you want to delete this task ?
        </p>
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
            className="form-btn delete-task"
            onClick={handleDeleteTask}
          >
            Delete
          </button>
        </div>
      </form>
    </section>
  );
};

export default DeleteModal;
