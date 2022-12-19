// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { ContextAuth } from "../../../Memory/Auth";
// import { logIn } from "../../../services/Auth";
// import Credentials from "../../shared/Credentials";

// function Access() {
//   const navigate = useNavigate();
//   const [auth, sendAuth] = useContext(ContextAuth);
//   const send = async (form) => {
//     const token = await logIn(form);
//     sendAuth({ tipo: "colocar", token });
//     navigate("/list");
//   };

//   return <Credentials send={send} title="Access" button="Access"></Credentials>;
// }

// export default Access;
