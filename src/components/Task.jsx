import { CiEdit } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import useModal from "../hooks/useModal";
import useTasks from "../hooks/useTasks";

const Task = ({ task, index }) => {
  const { id, title, done, added_on, completed_on } = task;

  const { setShowModal, setTaskId } = useModal();

  const { checkTask } = useTasks();

  const handleEdit = () => {
    setShowModal("edit");
    setTaskId(id);
  };

  const handleDeleteClick = () => {
    setShowModal("delete");
    setTaskId(id);
  };

  return (
    <>
      <article className="task">
        <button
          className="task-state btn"
          title="Done"
          onClick={() => checkTask(id)}
        >
          <IoMdCheckmarkCircleOutline
            className={`state-icon ${done ? "completed" : ""}`}
          />
        </button>
        <div className="task-content">
          <p className={`task-title ${done ? `done` : ""}`}>
            Task {index}: {title}
          </p>
          <div className="task-dates">
            <p>
              <b>Added on:</b> {added_on}
            </p>
            <p>
              <b>Completed on:</b> {completed_on}
            </p>
          </div>
        </div>
        <div className="task-actions">
          <button
            className="edit btn"
            title="Edit"
            onClick={handleEdit}
          >
            <CiEdit className="edit-icon" />
          </button>
          <button
            className="delete btn"
            title="Delete"
            onClick={handleDeleteClick}
          >
            <MdDelete className="delete-icon" />
          </button>
        </div>
      </article>
    </>
  );
};

export default Task;
