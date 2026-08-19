import "./TaskItem.css";
import { Todo } from "../../types";
import { useTodo } from "../../context/TodoContext";

// icons
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdOutlineRemoveDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

export default function TaskItem({ id, title, isDone }: Todo) {
  const { deleteTodo, toggleDone } = useTodo();

  return (
    <>
      <div className="item">
        <div
          className="text"
          style={{
            backgroundColor: isDone ? "var(--main)" : "",
            opacity: isDone ? "0.7" : "",
            textDecoration: isDone ? "line-through" : ""
          }}
        >
          {title}
        </div>

        <div className="btns">
          <div className="btn done">
            {isDone ? (
              <MdOutlineRemoveDone onClick={() => toggleDone(id)} />
            ) : (
              <IoCheckmarkDoneOutline onClick={() => toggleDone(id)} />
            )}
          </div>

          <div className="btn delete" onClick={() => deleteTodo(title)}>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    </>
  );
}
