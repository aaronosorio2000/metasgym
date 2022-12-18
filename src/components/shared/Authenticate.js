import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ContextAuth } from "../../Memory/Auth";

export function Authenticate() {
  const [auth] = useContext(ContextAuth);
  if (!auth.authenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet></Outlet>;
}
