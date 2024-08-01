import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>All Todos</h1>
      
      <RecoilRoot>
        <CreateTodo />
        <TodoList />
      </RecoilRoot>
    </>
  );
}

export default App;
