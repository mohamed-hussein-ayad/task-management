import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MyTasks from "../components/tasks/MyTasks";
import TaskCard from "../components/tasks/TaskCard";
import { useState } from "react";
import AddTaskModal from "../components/tasks/AddTaskModal";
import MenuDropdown from "../components/ui/MenuDropdown";
import { useGetTasksQuery } from "../redux/features/task/taskApi";
import profilePicture from "../assets/image/profile-picture.jpeg";
import member1 from "../assets/image/member1.jpeg";
import member2 from "../assets/image/member2.jpeg";
import member3 from "../assets/image/member3.jpeg";
import member4 from "../assets/image/member4.jpeg";
import member5 from "../assets/image/member5.jpeg";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: tasks } = useGetTasksQuery();

  const pendingTasks = tasks?.filter((item) => item.status === "pending");
  const runningTasks = tasks?.filter((item) => item.status === "running");
  const doneTasks = tasks?.filter((item) => item.status === "done");

  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-9 px-10 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Tasks</h1>
          </div>
          <div className="flex gap-5">
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-primary"
            >
              Add Task
            </button>
            <AddTaskModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              title="Add Task"
            />
            <MenuDropdown>
              <div className="h-10 w-10 rounded-xl overflow-hidden">
                <img
                  src={profilePicture}
                  alt="profilePicture"
                  className="object-cover h-full w-full "
                />
              </div>
            </MenuDropdown>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-purple-500 text-white p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {pendingTasks?.length}
              </p>
            </div>
            <div className="space-y-3">
              {pendingTasks?.map((item) => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-purple-500 text-white p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {runningTasks?.length}
              </p>
            </div>
            <div className="space-y-3">
              {runningTasks?.map((item) => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-purple-500 text-white p-5 rounded-md mb-3">
              <h1>Completed</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {doneTasks?.length}
              </p>
            </div>
            <div className="space-y-3">
              {doneTasks?.map((item) => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-10">
        <div>
          <h1 className="text-xl">Members</h1>
          <div className="flex gap-3 mt-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src={member1}
                alt="member1"
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src={member2}
                alt="member2"
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src={member3}
                alt="member3"
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src={member4}
                alt="member4"
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src={member5}
                alt="member5"
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;
