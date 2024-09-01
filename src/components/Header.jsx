import { FaTasks } from "react-icons/fa";
import useModal from "../hooks/useModal";

const Header = () => {
  const { setShowModal } = useModal();

  return (
    <>
      <header className="header">
        <div className="logo">
          <FaTasks className="logo-icon" />
          <h1 className="app-title">To-Do List App</h1>
        </div>
        <button
          className="add-btn"
          onClick={() => setShowModal("add")}
        >
          Add Task
        </button>
      </header>
    </>
  );
};

export default Header;
