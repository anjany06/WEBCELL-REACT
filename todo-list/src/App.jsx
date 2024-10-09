import "./App.css";
import { useState, useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";

function App() {
  const [input, setInput] = useState("");
  const todoListsRef = useRef(null);
  const todoInputRef = useRef(null);
  // const todoLists = document.querySelector(".todoList");
  // const todoInput = document.querySelector(".todo-input");
  // // const inputBtn = document.querySelector(".btn");
  let todoListValue = [];
  const getData = () => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  };

  const showTodoList = () => {
    todoListValue = getData();
    todoListsRef.current.innerHTML = "";
    todoListValue.forEach((currTodo) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = `
      <input type="checkbox" />
      <span>${currTodo}</span>
      <button class="delete-icon">Delete</button>
    `;
      todoListsRef.current.append(liElement);
    });
  };

  const removeTodoList = (event) => {
    if (event.target.classList.contains("delete-icon")) {
      let currentTodo = event.target.parentNode;
      todoListValue = todoListValue.filter(
        (currTodoValue) =>
          currTodoValue !== currentTodo.querySelector("span").textContent
      );
      localStorage.setItem("data", JSON.stringify(todoListValue));
      currentTodo.remove();
    }
  };

  const addTodoList = (event) => {
    event.preventDefault();
    let newTodo = todoInputRef.current.value.trim();
    if (newTodo.length !== 0 && !todoListValue.includes(newTodo)) {
      todoListValue.push(newTodo);
      localStorage.setItem("data", JSON.stringify(todoListValue));
      showTodoList();
      todoInputRef.current.value = "";
    }
  };

  useEffect(() => {
    showTodoList();
  });

  // inputBtn.addEventListener("click", addTodoList);
  // todoLists.addEventListener("click", removeTodoList);
  return (
    <>
      <form>
        <div className="container">
          <h1>TODO LIST</h1>
          <input
            type="text"
            value={input}
            ref={todoInputRef}
            className="todo-input"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn" onClick={addTodoList}>
            ADD
          </button>
          <div
            ref={todoListsRef}
            className="todoList"
            onClick={removeTodoList}
          ></div>
        </div>
      </form>
    </>
  );
}

export default App;
