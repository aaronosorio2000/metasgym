// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { ContextAuth } from "../../../Memory/Auth";
// import { register } from "../../../services/Auth";
// import Credentials from "../../shared/Credentials";

// function Register() {
//   const navigate = useNavigate();
//   const [auth, sendAuth] = useContext(ContextAuth);
//   const send = async (form) => {
//     const token = await register(form);
//     sendAuth({ tipo: "colocar", token });
//     navigate("/list");
//   };

//   return (
//     <Credentials send={send} title="Register" button="Signup"></Credentials>
//   );
// }

// export default Register;
