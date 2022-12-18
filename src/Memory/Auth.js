import React, { createContext, useReducer } from "react";

const initialStatus = {
  token: "",
  authenticated: false,
};

function reductor(estado, accion) {
  switch (accion.tipo) {
    case "colocar": {
      const newStatus = {
        token: accion.token,
        authenticated: true,
      };
      return newStatus;
    }

    default:
      throw new Error();
  }
}

export let ContextAuth = createContext(null);

function AuthMemory({ children }) {
  const value = useReducer(reductor, initialStatus);
  return <ContextAuth.Provider value={value}>{children}</ContextAuth.Provider>;
}

export default AuthMemory;
