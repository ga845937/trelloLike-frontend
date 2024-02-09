import React, { useState, useEffect } from "react";
import AddTaskComponent from "./addTask-component";
import { taskGet, getToken } from "../service/add-service";
import TaskComponent from "./task-component";

const HomeComponent = () => {
  let [taskName, setTaskName] = useState("");
  let [taskTotal, setTaskTotal] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const token = await getToken();
      const taskData = await taskGet(token);
      const taskRows = taskData.data.data.rows;
      taskRows.forEach((item) => {
        const newTaskComponent = (
          <TaskComponent
            taskName={item.name}
            id={item.id}
            key={item.id}
            setTaskTotal={setTaskTotal}
          />
        );
        // ...oldTasks:不知道有多少tasks array，用...展開全部
        setTaskTotal((oldTasks) => [...oldTasks, newTaskComponent]);
      });
    };

    getData();
  }, []);

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
