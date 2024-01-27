import { useReducer } from "react";
import { TaskContext } from "./Context";
import Page from "./Page/Page";
import { initialState, taskReducer } from "./Reducers/taskReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <Page />
      <ToastContainer position="bottom-right" />
    </TaskContext.Provider>
  );
}

export default App;
