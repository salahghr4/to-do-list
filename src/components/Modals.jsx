import useModal from "../hooks/useModal";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const Modals = () => {
  const { showModal } = useModal();

  return (
    <>
      {showModal === "add" && <AddModal />}
      {showModal === "edit" && <EditModal />}
      {showModal === "delete" && <DeleteModal />}
    </>
  );
};

export default Modals;
