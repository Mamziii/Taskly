import "./TaskItem.css";

// icons
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdOutlineRemoveDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

export default function TaskItem() {
  return (
    <>
      <div className="item">
        <div className="text">task item textttttttttt</div>

        <div className="btns">
          <div className="btn done">
            <IoCheckmarkDoneOutline />
          </div>

          <div className="btn delete">
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    </>
  );
}
