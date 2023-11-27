import React from "react";
import "./UserName.css";
import { useStateContext } from "../context/StateContext";

const UserName = () => {
  const { nameInputChangeHandler, formSubmissionHandler } = useStateContext();

  return (
    <form onSubmit={formSubmissionHandler}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <h1>Add Your Name to Play</h1>
          <input
            onChange={nameInputChangeHandler}
            type="text"
            placeholder="Name"
            name="name"
          />
          <div>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserName;
