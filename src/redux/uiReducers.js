const initialState = {
  toggleSidebar: false,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR": {
      console.log("Sidebar is Toggled");
      return {
        ...state,
        toggleSidebar: !state.toggleSidebar,
      };
    }

    case "TOGGLE_SIDEBAR_OPEN": {
      console.log("Sidebar is Open");
      return {
        ...state,
        toggleSidebar: true,
      };
    }

    case "TOGGLE_SIDEBAR_CLOSE": {
      console.log("Sidebar is Closed");
      return {
        ...state,
        toggleSidebar: false,
      };
    }

    default: {
      return state;
    }
  }
}
