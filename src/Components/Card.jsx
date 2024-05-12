import React from "react";

const Card = ({
  filter,
  setFilter,
  element,
  deleteTodo,
  editTodo,
  toggleStatus,
  editing,
  editedTitle,
  setEditedTitle,
  editedDesc,
  setEditedDesc,
  editSubmit,
}) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        {/* <h5 className="card-title">{element.id}. My Todo</h5> */}

        {/* Editing Part */}  
        {editing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Enter todo Title"
              required={true}
            />
            <input
              type="text"
              className="form-control mb-2"
              value={editedDesc}
              onChange={(e) => setEditedDesc(e.target.value)}
              placeholder="Enter todo description"
              required={true}
            />
            <button className="btn btn-success mr-2" onClick={editSubmit}>
              Save
            </button>
            <button
              className="btn btn-danger m-1"
              onClick={() => deleteTodo(element.id)}
            >
              Delete
            </button>
          </>
        ) : (
          // Actual Card
          <>
            <h5 className="card-text">
              Name: <span className="text-muted">{element.title}</span>
            </h5>
            <h6 className="card-text">
              Description:{" "}
              <span className="text-muted">{element.description}</span>
            </h6>
            <div className="form-group mt-2 mb-2">
              <div className="row align-items-center justify-content-start">
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <h6>Status:</h6>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-8">
                  <select
                    className="form-control"
                    value={element.completed ? "completed" : "notcompleted"}
                    onChange={(e) =>
                      toggleStatus(
                        element.id,
                        e.target.value === "completed" ? true : false
                      )
                    }
                  >
                    <option value="completed">
                      <h6 className="bg-success">Completed</h6>
                    </option>
                    <option value="notcompleted" className="bg-danger">
                      <h6 className="bg-danger">Not Completed</h6>
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row align-items-start justify-content-end m-0 mt-2">
              <div className="col-lg-4 col-md-5 col-sm-4 m-0 mt-2">
                <button className="btn btn-primary btns" onClick={editTodo}>
                  Edit
                </button>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-6 m-0 mt-2">
                <button
                  className="btn btn-danger btns"
                  onClick={() => deleteTodo(element.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
