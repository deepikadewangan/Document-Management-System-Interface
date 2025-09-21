import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  authToken: null,
  uploadedFiles: [], // store uploaded files
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, authToken: action.payload };
    case "ADD_FILE":
      return { ...state, uploadedFiles: [...state.uploadedFiles, action.payload] };
    default:
      return state;
  }
};

// Create context
const AppStateContext = createContext();
const AppDispatchContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

// Custom hooks for easy use
export const useAppState = () => useContext(AppStateContext);
export const useAppDispatch = () => useContext(AppDispatchContext);
