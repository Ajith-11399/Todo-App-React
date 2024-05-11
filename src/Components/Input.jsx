import React, { useState } from "react";

const Input = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    addTodo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container mt-2">
      <div className="row m-1">
        <div className="card boxInput">
          <div className="card-title">
            <h3 className="mt-3 text-center ">My ToDo</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-6 m-0 mb-3">
                <input
                  type="text"
                  className="form-control width1"
                  value={title}
                  placeholder="Enter todo Title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-6 m-0 mb-3">
                <input
                  type="text"
                  className="form-control width1"
                  value={description}
                  placeholder="Enter todo description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-3 m-0">
                <button
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  Add ToDo
                </button>
              </div>
            </div>
            <div className="boxLabel mt-1">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
