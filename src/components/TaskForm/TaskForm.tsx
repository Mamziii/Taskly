import { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import "./TaskForm.css";

// icons
import { IoIosAdd } from "react-icons/io";

export default function TaskForm() {
  const { addTodo } = useTodo();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <div className="form_title">Add your task</div>

          <div className="input_gp">
            <input
              type="text"
              placeholder="say anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <div >
              <button  type="submit" className="add_btn">
                <IoIosAdd />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
