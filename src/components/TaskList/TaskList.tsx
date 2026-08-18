import "./TaskList.css";

// components
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList() {
  return (
    <>
      <div className="tasklist_container">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </>
  );
}
