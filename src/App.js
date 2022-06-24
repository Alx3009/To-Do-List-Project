import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => {
  //store our todolist items into local storage
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <ToDoList 
          todo={todo} 
          setTodo={setTodo}
          setEditTodo ={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
