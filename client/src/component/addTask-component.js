import { v4 as uuidv4 } from "uuid";
import React, { useEffect } from "react";
import TaskComponent from "./task-component";

const AddTaskComponent = ({
  setTaskTotal,
  taskName,
  taskTotal,
  setTaskName,
}) => {
  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };
  const handleAddTask = () => {
    if (taskName == "") {
      window.alert("Please enter task name.");
    } else {
      const newTaskComponent = (
        <TaskComponent
          taskName={taskName}
          id={uuidv4()}
          setTaskTotal={setTaskTotal}
        />
      );
      // ...oldTasks:不知道有多少tasks array，用...展開全部
      setTaskTotal((oldTasks) => [...oldTasks, newTaskComponent]);
      setTaskName("");
    }
  };

  // useEffect(() => {
  //   const localData = localStorage.getItem("task") || "";
  //   if (localData) {
  //     setTaskTotal(JSON.parse(localData));
  //     console.log(JSON.parse(localStorage.getItem("task")));
  //   }
  // }, []);

  useEffect(() => {
    let data = taskTotal.map((item) => item.props.taskName);
    localStorage.setItem("task", JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("task")));
  }, [taskTotal]);

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
