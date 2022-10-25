import Goal from "./Goal";

const listMock = [
  {
    id: "1",
    details: "Levantar 100kg",
    period: "Mensual",
    events: 1,
    icon: "🏋️",
    target: 4,
    deadline: "2030-01-01",
    completed: 2,
  },
  {
    id: "2",
    details: "Corre 5 veces",
    period: "Semanal",
    events: 1,
    icon: "🏋️",
    target: 5,
    deadline: "2030-01-01",
    completed: 1,
  },
  {
    id: "3",
    details: "Seguir la dieta",
    period: "Semanal",
    events: 1,
    icon: "🏋️",
    target: 7,
    deadline: "2030-01-01",
    completed: 5,
  },
];

function List() {
  return listMock.map((target) => <Goal {...target}></Goal>);
}
export default List;
