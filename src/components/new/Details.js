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
    <div>
      <form>
        <label>
          Describe tu Meta
          <input placeholder="ej. correr 30min" />
        </label>
        <label>
          ¿Con que frecuencia deseas cumplir tu meta?{" "}
          <span>(ej. 1 vez por semana)</span>
          <div>
            <input type="number" />
            <select>
              <option value="día">al día</option>
              <option value="semana">a la semana</option>
              <option value="mes">al mes</option>
              <option value="año">al año</option>
            </select>
          </div>
        </label>
        <label>
          ¿Cuantas veces deseas completar esta meta?
          <input type="number" />
        </label>
        <label>
          ¿Tienes una fehca límite?
          <input type="date" />
        </label>
        <label>
          ¿Cuantas veces haz completado ya esta meta?
          <input type="number" />
        </label>
        <label>
          Escoge el icono para la meta
          <select>
            {iconos.map((opcion) => (
              <option value={opcion}>{opcion}</option>
            ))}
          </select>
        </label>
      </form>
      <div>
        <button>Crear</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
}

export default Details;
