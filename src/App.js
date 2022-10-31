import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/shared/Layout";
import List from "./components/list/list";
import Details from "./components/new/Details";
import NotFound from "./components/shared/NotFound";
import Modal from "./components/shared/Modal";
import { useContext, useEffect } from "react";
import { pedirGoals } from "./services/Pedidos";
import { Contexto } from "./services/Memory";

function App() {
  const [, dispatch] = useContext(Contexto);
  useEffect(() => {
    (async () => {
      const goals = await pedirGoals();
      dispatch({ tipo: "colocar", goals });
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="/list" element={<List />}>
          <Route
            path="/list/:id"
            element={
              <Modal>
                <Details />
              </Modal>
            }
          />
        </Route>
        <Route path="/new" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
