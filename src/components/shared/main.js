import styles from "./Main.module.css";
import Link from "./link";
import { ReactComponent as ListSVG } from "../../img/lista.svg";
import { ReactComponent as NuevaSVG } from "../../img/nueva.svg";

function Main({ children }) {
  return (
    <div className={styles.principal}>
      <aside className={styles.aside}>
        <Link href="/list" text="Lista de Metas" Icon={ListSVG} />
        <Link href="/create" text="Nueva Meta" Icon={NuevaSVG} />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Main;
