import React from "react";

const TodoItem = ({todoitem}) => {
const {todo}=todoitem;

const divStyle = {
    border: 'none',
  background: 'none'
  };

  return (
    <>
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text" style={divStyle} >
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <p className="h4">{todo}</p>
            </div>
          </div>
          <div className="col-2 float-right text-right">
            <button className="btn btn-primary">E</button>
            <button className="btn btn-danger">X</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
