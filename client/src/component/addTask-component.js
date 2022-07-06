import { v4 as uuidv4 } from "uuid";
import React, { useEffect } from "react";
import TaskComponent from "./task-component";

const AddTaskComponent = ({
  taskTotal,
  setTaskTotal,
  taskName,
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
          taskTotal={taskTotal}
          setTaskTotal={setTaskTotal}
        />
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
