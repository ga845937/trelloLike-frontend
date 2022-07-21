import TaskComponent from "./task-component";
import { taskPost, getToken } from "../service/add-service";

const AddTaskComponent = ({
  setTaskTotal,
  taskName,
  taskTotal,
  setTaskName,
}) => {
  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };
  const handleAddTask = async () => {
    if (taskName === "") {
      window.alert("Please enter task name.");
    } else {
      const token = await getToken();
      await taskPost(taskName, token);
      const newTaskComponent = (
        <TaskComponent taskName={taskName} setTaskTotal={setTaskTotal} />
      );
      // ...oldTasks:不知道有多少tasks array，用...展開全部
      setTaskTotal((oldTasks) => [...oldTasks, newTaskComponent]);
      setTaskName("");
    }
  };

  return (
    <div className="addTask">
      <input
        onChange={handleTaskName}
        name="taskName"
        type="text"
        placeholder="Enter a task name"
        value={taskName}
        required
      />
      <button onClick={handleAddTask}>+ Add Task</button>
    </div>
  );
};

export default AddTaskComponent;
