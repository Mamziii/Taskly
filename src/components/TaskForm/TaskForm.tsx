import "./TaskForm.css";

// icons
import { IoIosAdd } from "react-icons/io";

export default function TaskForm() {
  return (
    <>
      <div className="form_container">
        <form>
          <div className="form_title">Add your task</div>

          <div className="input_gp">
            
            <input type="text" placeholder="say anything..." />

            <div className="add_btn">
              <IoIosAdd />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
