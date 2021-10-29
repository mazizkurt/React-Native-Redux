let defaultState = {
  notes: { items: [], id: "" },
};

let noteReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_NOTE":
      newState = { ...state };
      newState.notes = {
        items: [...newState.notes.items, action.payload],
        id: action.payload.id,
      };
      return newState;

    case "LOCATION_FILTER_ADS":
         newState = { ...state };
        newState.notes={
          items: [...newState.notes.items, action.payload],
          id: action.payload.id,
        }
        return newState
    default:
      return state;
  }
};
export default noteReducer;
