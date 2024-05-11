import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Card from "./Components/Card";

const App = () => {
  //Add
  const [todo, setTodo] = useState([]);

  //Edit
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDesc, setEditedDesc] = useState("");

  //Filter
  const [filter, setFilter] = useState("all");

  //Add block
  const addTodo = (newTitle, newDesc, status) => {
    const data = {
      id: todo.length + 1,
      title: newTitle,
      description: newDesc,
      completed: status,
    };
    setTodo([...todo, data]);
    console.log("added");
  };

  //Delete block
  const deleteTodo = (id) => {
    setTodo(todo.filter((ele) => ele.id !== id));
  };

  //Edit block
  const editTodo = () => {
    //Edit by id part
    const editedTodoIndex = todo.findIndex((item) => item.id === editingId);
    //Editing part
    const updatedTodo = {
      ...todo[editedTodoIndex],
      title: editedTitle,
      description: editedDesc,
    };
    //Updating part
    const updatedTodoList = [...todo];
    updatedTodoList[editedTodoIndex] = updatedTodo;
    setTodo(updatedTodoList);
    setEditingId(null);
    setEditedTitle("");
    setEditedDesc("");
  };

  //Filter toggle
  const toggleStatus = (id, status) => {
    const updatedTodoList = todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: status };
      }
      return item;
    });
    setTodo(updatedTodoList);
  };

  //Filter by Status
  const filteredTodo = () => {
    if (filter === "completed") {
      return todo.filter((item) => item.completed);
    } else if (filter === "notcompleted") {
      return todo.filter((item) => !item.completed);
    } else {
      return todo;
    }
  };

  return (
    <div className="container">
      <div className="row g-2 mt-1">
        <div>
          <Input addTodo={addTodo} />
        </div>
      </div>
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-lg-10 col-md-7 col-sm-6 align-items-end">
          <h3>My todos</h3>
        </div>
        <div className="col-lg-2 col-md-5 col-sm-6 align-items-end">
          <label htmlFor="filterSelect" style={{ width: "150px" }} className="">
            Status Filter:
          </label>
          <select
            id="filterSelect"
            className="form-select ms-0 mt-0 bg-info"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notcompleted">Not Completed</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 align-items-center justify-content-center mt-5">
        {filteredTodo().map((element, index) => (
          <div className="cols-12">
            <Card
              key={index}
              element={element}
              deleteTodo={deleteTodo}
              filter={filter}
              setFilter={setFilter}
              editTodo={() => {
                setEditingId(element.id);
                setEditedTitle(element.title);
                setEditedDesc(element.description);
              }}
              toggleStatus={(status) => toggleStatus(element.id, status)}
              editing={editingId === element.id}
              editedTitle={editedTitle}
              setEditedTitle={setEditedTitle}
              editedDesc={editedDesc}
              setEditedDesc={setEditedDesc}
              editSubmit={editTodo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
