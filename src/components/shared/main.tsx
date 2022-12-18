import styles from "./Main.module.css";
import Vinculo from "./Vinculo";
import { ReactComponent as ListSVG } from "../../img/lista.svg";
import { ReactComponent as NuevaSVG } from "../../img/nueva.svg";

interface MainProps {
  children: React.ReactNode;
}
function Main({ children }: MainProps) {
  return (
    <div className={styles.principal}>
      <aside className={styles.aside}>
        <Vinculo to="/list" text="Lista de Metas" Icon={ListSVG} />
        <Vinculo to="/new" text="Nueva Meta" Icon={NuevaSVG} />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Main;
