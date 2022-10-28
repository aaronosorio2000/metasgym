import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Contexto } from "../../services/Memory";
import Goal from "./Goal";

function List() {
  const [estado, dispatch] = useContext(Contexto);

  return (
    <>
      {estado.order.map((id) => (
        <Goal key={id} {...estado.objects[id]}></Goal>
      ))}
      <Outlet />
    </>
  );
}
export default List;
