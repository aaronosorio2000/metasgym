import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Contexto } from "../../services/Memory";
import Details from "../new/Details";

function Modal() {
  const { id } = useParams();
  const [estado, dispatch] = useContext(Contexto);

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
      {JSON.stringify(estado.objects[id])}
      <Details></Details>
    </div>
  );
}

export default Modal;
