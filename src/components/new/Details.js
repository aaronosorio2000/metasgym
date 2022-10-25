import styles from "./Details.module.css";

function Details() {
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
          <input className="input" placeholder="ej. correr 30min" />
        </label>
        <label className="label">
          ¿Con que frecuencia deseas cumplir tu meta?{" "}
          <span>(ej. 1 vez por semana)</span>
          <div className="flex mb-6">
            <input type="number" className="input mr-6" />
            <select className="input">
              <option value="día">al día</option>
              <option value="semana">a la semana</option>
              <option value="mes">al mes</option>
              <option value="año">al año</option>
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input className="input" type="number" />
        </label>
        <label className="label">
          ¿Tienes una fehca límite?
          <input className="input" type="date" />
        </label>
        <label className="label">
          ¿Cuantas veces haz completado ya esta meta?
          <input className="input" type="number" />
        </label>
        <label className="label">
          Escoge el icono para la meta
          <select>
            {iconos.map((opcion) => (
              <option value={opcion}>{opcion}</option>
            ))}
          </select>
        </label>
      </form>
      <div className={styles.buttons}>
        <button className="button button--black">Crear</button>
        <button className="button button--gray">Cancelar</button>
      </div>
    </div>
  );
}

export default Details;
