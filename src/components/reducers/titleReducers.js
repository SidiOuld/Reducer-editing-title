//setting up the initial state
export const initialState = {
  title: "click on edit to edit me",
  editing: false
};

export const titleReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_EDITING":
      return {
        ...state,
        editing: !state.editing
      };

    case "UPDATE_TITLE":
      return {
        ...state,
        editing: !state.editing,
        title: action.payload
      };

    default:
      return state;
  }
};
