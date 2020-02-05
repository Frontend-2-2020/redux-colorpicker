function colorReducer(store = "#FF6600", action) {
  switch (action.type) {
    case "COLOR_CHANGE":
      return action.payload;
    default:
      return store;
  }
}

export default colorReducer;
