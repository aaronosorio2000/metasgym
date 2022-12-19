import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import Layout from "./components/shared/Layout";
import List from "./components/private/list/list";
import Details from "./components/private/new/Details";
import NotFound from "./components/shared/NotFound";
import Modal from "./components/shared/Modal";
import { useContext, useEffect } from "react";
import { pedirGoals } from "./services/Goals";
import { ContextoGoals } from "./Memory/Goals";
import Access from "./components/publico/access/access";
import Register from "./components/publico/register/register";
import { Authenticate } from "./components/shared/Authenticate";

function App() {
  const [, dispatch] = useContext(ContextoGoals);
  useEffect(() => {
    (async () => {
      const goals = await pedirGoals();
      dispatch({ tipo: "colocar", goals });
    })();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list" />} />
      <Route element={<Layout />}>
        {/* <Route path="/login" element={<Access />} /> */}
        {/* <Route path="/signup" element={<Register />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<Layout />}>
        {/* <Route element={<Authenticate />}> */}
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
        {/* </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
