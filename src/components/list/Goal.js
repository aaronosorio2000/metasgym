import styles from "./Goal.module.css";

function Goal({ icon, events, period, details, completed, target }) {
  return (
    <div className={styles.goal + " card"}>
      <div className="flex items-center">
        <div className={styles.icon}>{icon}</div>
        <p className="text-xl ml-5 mr-10">
          {events}
          <sub className="text-xs text-gray-500 ml-1">/ {period}</sub>
        </p>
        <p>{details}</p>
      </div>
      <div className="flex">
        <div className="relative m-2 mx-5">
          <p className="text-center">
            {completed} de {target}
          </p>
          <div className={styles.bar1}>
            <div
              style={{ width: `${Math.round((completed / target) * 100)}%` }}
              className={styles.bar2}
            ></div>
          </div>
        </div>
        <button className="botton botton--gray">Completado</button>
      </div>
    </div>
  );
}

export default Goal;
