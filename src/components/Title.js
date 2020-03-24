import React, { useState, useReducer } from "react";

// from reducers
import { initialState, titleReducer } from "./reducers/titleReducers";

function Title() {
  const [newTitleText, setNewTextTitle] = useState("");
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChange = e => {
    setNewTextTitle(e.target.value);
  };
  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}
          {""}
          <button onClick={() => dispatch({ type: "TOGGLE_EDITING" })}>
            Edit
          </button>
        </h1>
      ) : (
        <div>
          <input
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_TITLE", payload: newTitleText });
              setNewTextTitle("");
            }}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default Title;
