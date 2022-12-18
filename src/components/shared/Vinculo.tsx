import styles from "./Link.module.css";
import { Link } from "react-router-dom";

interface VinculoProps {
  Icon: any;
  text: string;
  to: string;
}

function Vinculo({ Icon, text, to }: VinculoProps) {
  return (
    <Link to={to} className={styles.link}>
      <Icon className={styles.icon} />
      {text && <span className={styles.text}>{text}</span>}
    </Link>
  );
}

export default Vinculo;
