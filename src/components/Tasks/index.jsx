import React from "react";
import { Header } from "../Header/Header";
import { TasksStages } from "./TasksStages/TasksStages";
import "./index.css";
import { TasksTip } from "./TasksRightComps/TasksTip";
import TasksStepOne from "./TasksRightComps/TasksStepOne";
import TasksTwoCases from "./TasksRightComps/TasksTwoCases";
import { TasksModal } from "./TasksModal/TasksModal";

export const Tasks = () => {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <Header active={"Задания"} />
      <div className="tasks-container  background-filter">
        <div className="wrap-bg"></div>
        <TasksStages />
        <div className="tasks-container-left-up-block-rod">
          <div
            className="tasks-container-left-up-block"
            onClick={() => setActive(true)}
          >
            <p className="tasks-container-left-up-block-text">Этап 5</p>
            <span className="tasks-container-left-up-block-text-down">
              План развития себя
            </span>
          </div>
          <TasksTip />
          <TasksStepOne />
          <TasksTwoCases />
        </div>
      </div>
      <TasksModal active={active} setActive={setActive} />
    </>
  );
};
