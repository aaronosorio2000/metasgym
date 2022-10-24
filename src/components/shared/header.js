import styles from "./Header.module.css";
import { ReactComponent as ProfileSVG } from "../../img/perfil.svg";
import Link from "./link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.title} href="/">
          Always Mamadisimos
        </a>
      </div>
      <nav>
        <Link href="/profile" Icon={ProfileSVG} />
      </nav>
    </header>
  );
}

export default Header;
