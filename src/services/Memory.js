import { createContext, useReducer } from "react";

const listMock = [
  {
    id: "1",
    details: "Levantar 100kg",
    period: "Mensual",
    events: 1,
    icon: "🏋️",
    goal: 4,
    deadline: "2030-01-01",
    completed: 2,
  },
  {
    id: "2",
    details: "Corre 5 veces",
    period: "Semanal",
    events: 1,
    icon: "🏋️",
    goal: 5,
    deadline: "2030-01-01",
    completed: 1,
  },
  {
    id: "3",
    details: "Seguir la dieta",
    period: "Semanal",
    events: 1,
    icon: "🏋️",
    goal: 7,
    deadline: "2030-01-01",
    completed: 5,
  },
];

const initialStatus = {
  order: [],
  objects: {},
};

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
      return newStatus;
    }
    case "create": {
      const id = Math.random(); //accion.goal.id;
      const newStatus = {
        order: [...estado.order, id],
        objects: {
          ...estado.objects,
          [id]: accion.goal,
        },
      };
      return newStatus;
    }
  }
}

const goals = reductor(initialStatus, { tipo: "colocar", goals: listMock });

export const Contexto = createContext(null);

function Memory({ children }) {
  const [estado, dispatch] = useReducer(reductor, goals);
  return (
    <Contexto.Provider value={[estado, dispatch]}>{children}</Contexto.Provider>
  );
}

export default Memory;
