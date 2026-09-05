import "./TaskList.css";
import { useTodo } from "../../context/TodoContext";

// components
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList() {
  const { todos, clearAll } = useTodo();

  return (
    <>
      <div className="tasklist_container">
        {todos.length > 0 ? (
          <>
            {todos.map((todo) => (
              <TaskItem key={todo.id} {...todo} />
            ))}

            {todos.length > 1 && (
              <div className="clearall_btn" onClick={clearAll}>
                Clear all
              </div>
            )}
          </>
        ) : (
          <>
            <div className="empty_list">
              <span>Your list is <span className="empty">empty !</span></span>
            </div>
          </>
        )}
      </div>
    </>
  );
}
