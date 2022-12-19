// import List from "./components/list/list";
// import Details from "./components/new/Details";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

function Layout() {
  return (
    <>
      <Header></Header>
      <Main>
        <Outlet></Outlet>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
