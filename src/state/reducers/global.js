const initialState = {};

function global(state = initialState, action) {
  switch (action.type) {
    case "action":
      return {
        ...state,
        result: action.payload
      };
    default:
      return state;
  }
}

export default global;
