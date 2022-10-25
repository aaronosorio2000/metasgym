import "./App.css";
import List from "./components/list/list";
import Details from "./components/new/Details";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import Main from "./components/shared/main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        {/* <List></List> */}
        <Details></Details>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
