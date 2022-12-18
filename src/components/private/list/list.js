import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ContextoGoals } from "../../../Memory/Goals";
import Goal from "./Goal";

function List() {
  const [goals] = useContext(ContextoGoals);

  return (
    <>
      {goals.order.map((id) => (
        <Goal key={id} {...goals.objects[id]}></Goal>
      ))}
      <Outlet />
    </>
  );
}
export default List;
