import { createContext, useReducer } from "react";

// const memory = localStorage.getItem("goal");
const initialStatus = {
  order: [],
  objects: {},
};
//   ? JSON.parse(memory)
//   : {
//       order: [],
//       objects: {},
//     };

function reductor(estado, accion) {
  switch (accion.tipo) {
    case "colocar": {
      const goals = accion.goals;
      const newStatus = {
        order: goals.map((goal) => goal.id),
        objects: goals.reduce(
          (object, goal) => ({ ...object, [goal.id]: goal }),
          {}
        ),
      };
      //   localStorage.setItem("goal", JSON.stringify(newStatus));
      return newStatus;
    }
    case "create": {
      const id = accion.goal.id;
      const newStatus = {
        order: [...estado.order, id],
        objects: {
          ...estado.objects,
          [id]: accion.goal,
        },
      };
      //   localStorage.setItem("goal", JSON.stringify(newStatus));
      return newStatus;
    }
    case "update": {
      const id = accion.goal.id;
      estado.objects[id] = {
        ...estado.objects[id],
        ...accion.goal,
      };
      const newStatus = { ...estado };
      //   localStorage.setItem("goal", JSON.stringify(newStatus));
      return newStatus;
    }
    case "borrar": {
      const id = accion.id;
      const newOrder = estado.order.filter((item) => item !== id);
      delete estado.objects[id];
      const newStatus = {
        order: newOrder,
        objects: estado.objects,
      };
      //   localStorage.setItem("goal", JSON.stringify(newStatus));
      return newStatus;
    }
    default:
      throw new Error();
  }
}

export const Contexto = createContext(null);

function Memory({ children }) {
  const [estado, dispatch] = useReducer(reductor, initialStatus);
  return (
    <Contexto.Provider value={[estado, dispatch]}>{children}</Contexto.Provider>
  );
}

export default Memory;
