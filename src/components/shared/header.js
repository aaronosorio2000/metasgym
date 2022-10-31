import styles from "./Header.module.css";
import { ReactComponent as ProfileSVG } from "../../img/perfil.svg";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import Vinculo from "./link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Vinculo to="/" text="Always Mamadisimos" Icon={LogoSVG} />
      </div>
      <nav>
        <Vinculo to="/profile" Icon={ProfileSVG} />
      </nav>
    </header>
  );
}

export default Header;
