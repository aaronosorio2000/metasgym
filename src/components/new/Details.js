import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../services/Memory";
import styles from "./Details.module.css";

function Details() {
  const [form, setForm] = useState({
    details: "",
    events: 1,
    period: "semana",
    icon: "🏃",
    goal: 52,
    deadline: "2030-01-01",
    completed: 0,
  });

  const [estado, dispatch] = useContext(Contexto);

  const { details, events, period, icon, goal, deadline, completed } = form;
  const onChange = (event, prop) => {
    setForm((status) => ({ ...status, [prop]: event.target.value }));
  };

  useEffect(() => {
    // console.log(form);
  }, [form]);

  const navegar = useNavigate();

  const create = async () => {
    dispatch({ tipo: "create", goal: form });
    navegar("/list");
  };

  const iconos = [
    "🏋️",
    "🏃",
    "🏊‍♀️",
    " 🚴",
    "🎾",
    "🍔",
    "⚽",
    "🥊",
    "🧗",
    "😴",
    "🎯",
  ];

  return (
    <div className="card">
      <form>
        <label className="label">
          Describe tu Meta
          <input
            className="input"
            placeholder="ej. correr 30min"
            value={details}
            onChange={(e) => onChange(e, "details")}
          />
        </label>
        <label className="label">
          ¿Con que frecuencia deseas cumplir tu meta?{" "}
          <span>(ej. 1 vez por semana)</span>
          <div className="flex mb-6">
            <input
              type="number"
              className="input mr-6"
              value={events}
              onChange={(e) => onChange(e, "events")}
            />
            <select
              className="input"
              value={period}
              onChange={(e) => onChange(e, "period")}
            >
              <option value="día">al día</option>
              <option value="semana">a la semana</option>
              <option value="mes">al mes</option>
              <option value="año">al año</option>
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input
            className="input"
            type="number"
            value={goal}
            onChange={(e) => onChange(e, "goal")}
          />
        </label>
        <label className="label">
          ¿Tienes una fehca límite?
          <input
            className="input"
            type="date"
            value={deadline}
            onChange={(e) => onChange(e, "deadline")}
          />
        </label>
        <label className="label">
          ¿Cuantas veces haz completado ya esta meta?
          <input
            className="input"
            type="number"
            value={completed}
            onChange={(e) => onChange(e, "completed")}
          />
        </label>
        <label className="label">
          Escoge el icono para la meta
          <select
            className="input"
            value={icon}
            onChange={(e) => onChange(e, "icon")}
          >
            {iconos.map((opcion) => (
              <option value={opcion}>{opcion}</option>
            ))}
          </select>
        </label>
      </form>
      <div className={styles.buttons}>
        <button className="button button--black" onClick={create}>
          Crear
        </button>
        <button className="button button--gray">Cancelar</button>
      </div>
    </div>
  );
}

export default Details;
