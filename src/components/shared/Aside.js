import styles from "./Aside.module.css";
import Vinculo from "./Vinculo";
import { ReactComponent as ListSVG } from "../../img/lista.svg";
import { ReactComponent as NuevaSVG } from "../../img/nueva.svg";

function Aside() {
  return (
    <aside className={styles.aside}>
      <Vinculo to="/list" text="Lista de Metas" Icon={ListSVG} />
      <Vinculo to="/new" text="Nueva Meta" Icon={NuevaSVG} />
    </aside>
  );
}

export default Aside;
