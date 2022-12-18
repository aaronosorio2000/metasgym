// import List from "./components/list/list";
// import Details from "./components/new/Details";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Footer from "./footer";
import Header from "./header";
import styles from "./Layout.module.css";

function Layout({ privado }) {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        {privado && <Aside />}
        <section className={styles.section}>
          <Outlet></Outlet>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
