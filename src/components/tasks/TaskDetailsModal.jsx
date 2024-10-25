/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useSelector } from "react-redux";
import Modal from "../ui/Modal";
import { useGetTasksByEmailQuery } from "../../redux/features/task/taskApi";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.taskSlice);
  const { email: userEmail } = useSelector((state) => state.userSlice);

  const { data: userSpecificTask } = useGetTasksByEmailQuery(userEmail);

  const task = userSpecificTask?.find((item) => item._id === id);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      <p className="my-4">{task?.description}</p>
      <div className="flex items-center justify-between my-4">
        <h3 className="text-sm">Assigned To: {task?.assignedTo}</h3>
        <p className="font-bold text-purple-600">Deadline: {task?.deadline}</p>
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
