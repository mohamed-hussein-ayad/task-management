/* eslint-disable react/prop-types */
import { useAddTaskMutation } from "../../redux/features/task/taskApi";
import { useGetUsersQuery } from "../../redux/features/user/userApi";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen, title }) => {
  const { register, handleSubmit, reset } = useForm();

  const [addTask, { data, error }] = useAddTaskMutation();

  console.log(data);
  console.log(error);

  const { data: users } = useGetUsersQuery();
  // console.log(users);
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    addTask({ ...data, status: "pending" });
    onCancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-3">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className="w-full rounded-md"
          />
        </div>
        <div className="my-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            placeholder="description"
            {...register("description")}
          />
        </div>
        <div className="my-3">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            {...register("deadline")}
            className="w-full rounded-md"
          />
        </div>
        <div className="my-3">
          <label htmlFor="assignedTo">Assign To</label>
          <select
            id="assignedTo"
            {...register("assignedTo")}
            className="w-full rounded-md"
          >
            {users?.map((user) => {
              return (
                <option key={user._id} value={user?.email}>
                  {user?.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="my-3">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            {...register("priority")}
            className="w-full rounded-md"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex justify-end gap-3 mt-3">
          <button className="btn btn-danger" type="submit" onClick={onCancel}>
            {" "}
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
