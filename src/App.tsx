import "./App.css";

// components
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <TaskList/>
    </>
  );
}

export default App;
