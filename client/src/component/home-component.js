import React, { useState, useEffect } from "react";
import AddTaskComponent from "./addTask-component";

const HomeComponent = () => {
  let [taskName, setTaskName] = useState("");
  let [taskTotal, setTaskTotal] = useState([]);

  // useEffect(() => {}, []);

  return (
    <div className="main" style={{ minHeight: "90vh" }}>
      <AddTaskComponent
        taskName={taskName}
        setTaskName={setTaskName}
        taskTotal={taskTotal}
        setTaskTotal={setTaskTotal}
      />
      <div className="content">
        <div className="card">{taskTotal}</div>
      </div>
    </div>
  );
};

export default HomeComponent;
