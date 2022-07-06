import React, { useState } from "react";
import SearchComponent from "./search-component";
import AddService from "../../client/src/service/add-service";

const HomeComponent = () => {
  let [taskName, setTaskName] = useState("");

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };
  const handleAddTask = () => {
    let task = document.createElement("div");
    console.log(task);
  };

  return (
    <div className="main" style={{ minHeight: "90vh" }}>
      <SearchComponent />
      <div className="content">
        <div className="addTask">
          <input
            onChange={handleTaskName}
            name="taskName"
            type="text"
            placeholder="Enter a task name"
          />
          <button onClick={handleAddTask}>+ Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
