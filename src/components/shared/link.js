import styles from "./Link.module.css";
import { Link } from "react-router-dom";

function Vinculo({ Icon, text, to }) {
  return (
    <Link to={to} className={styles.link}>
      <Icon className={styles.icon} />
      {text && <span className={styles.text}>{text}</span>}
    </Link>
  );
}

export default Vinculo;
