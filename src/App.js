import "./App.css";
import Goal from "./components/list/Goal";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import Main from "./components/shared/main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Goal></Goal>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
