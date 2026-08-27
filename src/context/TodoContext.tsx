import { Todo } from "../types";
import swal from "sweetalert";
import { createContext, useContext, useEffect, useState } from "react";

type TodoContextType = {
  todos: Todo[];
  toggleDone: (id: string) => boolean;
  addTodo: (title: string) => boolean;
  deleteTodo: (title: string) => boolean;
  clearAll: () => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  // get todos from localstorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  //   save changes in localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //   add todo function
  const addTodo = (title: string) => {
    const isDuplicate = todos.some(
      (todo) =>
        todo.title.trim().toLocaleLowerCase() ===
        title.trim().toLocaleLowerCase(),
    );

    if (isDuplicate) {
      swal({
        title: "This task is already exist!",
        icon: "error",
      });
      return false;
    }

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        isDone: false,
      },
    ]);

    return true;
  };

  //   isDone function
  const toggleDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );

    return true;
  };

  //   delete a todo function
  const deleteTodo = (title: string) => {
    swal({
      title: `Are you sure to delete ${title}?`,
      icon: "warning",
      buttons: ["no", "yes"],
    }).then((result) => {
      if (result) {
        setTodos(todos.filter((todo) => todo.title !== title));

        swal({
          title: `${title} delete`,
          icon: "success",
        });
      }
    });

    return true;
  };

  //   clear all  todos function
  const clearAll = () => {
    setTodos([]);

    swal({
      title: "All tasks deleted!",
      icon: "success",
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleDone,
        deleteTodo,
        clearAll,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const cntx = useContext(TodoContext);
  if (!cntx) throw new Error("useTodo must be used whitin TodoProvider");

  return cntx;
};
