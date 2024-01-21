import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import ToDos from "./MyComponents/ToDos";
import AddToDo from "./MyComponents/AddToDo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./MyComponents/About";
function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((element) => {
        return element !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToDoItem = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const newTodo = { sno: sno, title: title, desc: desc };
    setTodos([...todos, newTodo]);
  };
  return (
    <BrowserRouter>
      <Header title="MyToDosList" searchBar={true} />
      <Routes>
        <Route exact path="/todoslist/" element={
          <>
          <AddToDo addToDoItem={addToDoItem} />
          <ToDos todos={todos} onDelete={onDelete} />
        </>
        }>
        </Route>
        <Route exact path="/todoslist/about" Component={About}>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
