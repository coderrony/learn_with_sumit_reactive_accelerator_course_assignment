import { useContext, useState } from "react";
import { TaskContext } from "./../../Context/index";
import { toast } from "react-toastify";
// check any field are empty or not
function taskFieldValidation(task) {
  const emptyField = [];
  if (task.title === "") {
    emptyField.push("Title");
  }
  if (task.description === "") {
    emptyField.push("Description");
  }
  if (task.tags === "") {
    emptyField.push("Tags");
  }
  if (task.priority === "") {
    emptyField.push("Priority");
  }

  return emptyField;
}

function TaskModal({ onModalShow, editTask, setEditTask }) {
  const { tasks, dispatch } = useContext(TaskContext);

  const [task, setTask] = useState(
    editTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: "",
      priority: "",
      isFavorite: false,
    }
  );
  const handleTask = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;

    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkField = taskFieldValidation(task);

    if (checkField.length === 0) {
      if (editTask) {
        dispatch({
          type: "UPDATE_TASK",
          payload: task,
        });
        setEditTask(null);
      } else {
        dispatch({
          type: "ADD_TASK",
          payload: task,
        });
        toast.success(`Added  ${task.title} to Task Board !`);
      }

      onModalShow();
    } else {
      let showAlert = "";
      checkField.map((field) => {
        showAlert += " " + field;
      });
      showAlert += " must be require";
      toast.error(showAlert);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen  z-50 backdrop-blur-sm"
      onClick={onModalShow}
    >
      {/* use Propagation to handel modal. to hide modal you can click anywhere from modal  */}
      <form
        onClick={(e) => e.stopPropagation()}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-2 lg:p-5 "
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleTask}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleTask}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleTask}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleTask}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {editTask ? "Edit Task" : "Create new Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskModal;
