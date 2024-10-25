import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserTasks,
  updateStatus,
} from "../../redux/features/task/taskSlice";
import TaskDetailsModal from "./TaskDetailsModal";
import { useGetTasksByEmailQuery } from "../../redux/features/task/taskApi";

const MyTasks = () => {
  // const { tasks } = useSelector((state) => state.taskSlice);
  const { email: userEmail } = useSelector((state) => state.userSlice);

  const { data: userSpecificTask } = useGetTasksByEmailQuery(userEmail);

  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(setUserTasks(userEmail));
  }, [userEmail, dispatch, userSpecificTask]);

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTask?.map((item) => (
          <div
            key={item?._id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item?.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleModal(item?._id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: item?._id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
