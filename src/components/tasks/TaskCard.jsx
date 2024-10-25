/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../../redux/features/task/taskSlice";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../redux/features/task/taskApi";
import toast, { Toaster } from "react-hot-toast";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const [updateTask, { data, error }] = useUpdateTaskMutation();
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();

  const handleRemoveTask = (taskId) => {
    deleteTask(taskId);
    toast.success("Task removed successfully");
  };

  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }

  const handleUpdate = (id, updatedStatus) => {
    const data = {
      status: updatedStatus,
    };
    const options = {
      id: id,
      data: data,
    };

    updateTask(options);
  };

  return (
    <div className="bg-secondary/10 rounded-md p-5 bg-gray-100 border border-gray-400">
      <Toaster />
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.priority === "high" ? "text-red-500" : ""
        } ${task?.priority === "medium" ? "text-yellow-500" : ""} ${
          task?.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>
        <div className="flex gap-3">
          <button onClick={() => handleRemoveTask(task?._id)} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() => handleUpdate(task._id, updatedStatus)}
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
