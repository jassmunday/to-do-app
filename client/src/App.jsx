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
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Todo List App</h1>
      </header>
      <RecoilRoot>
        <main className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <CreateTodo />
          <hr className="my-4" />
          <TodoList />
        </main>
      </RecoilRoot>
    </div>
  );
}

export default App;
