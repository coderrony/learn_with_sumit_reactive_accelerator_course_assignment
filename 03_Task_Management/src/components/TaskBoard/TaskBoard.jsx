import { useState } from "react";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

function TaskBoard() {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [query, setQuery] = useState("");

  const handleModal = () => {
    setShowModal((prev) => !prev);
    setEditTask(null);
  };
  const handleEditTask = (task) => {
    setEditTask(task);
    setShowModal((prev) => !prev);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <TaskModal
          onModalShow={handleModal}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <TaskActions onModalShow={handleModal} setQuery={setQuery} />
          </div>
          <div className="overflow-auto">
            <TaskList onTaskEdit={handleEditTask} query={query} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskBoard;
