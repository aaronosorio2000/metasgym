import React, { ChangeEvent, useState } from "react";
import styles from "./Credentials.module.css";

interface CredentialsProps {
  send: Function;
  title: string;
  button: string;
}

function Credentials({ send, title, button }: CredentialsProps) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const onChange = (event: ChangeEvent, prop: string) => {
    const value = (event.target as HTMLInputElement).value;
    setForm((e) => ({ ...e, [prop]: value }));
  };

  const onAccess = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    send(form);
  };

  return (
    <div className={styles.auth}>
      <h1 className={styles.head}>{title}</h1>
      <form className="p-4">
        <label className="label">
          Usuario
          <input
            className="input"
            placeholder="Escribe tu nombre de usuario"
            value={username}
            onChange={(e) => onChange(e, "username")}
          />
        </label>
        <label className="label">
          Contraseña
          <input
            type="password"
            className="input"
            placeholder="Escribe tu contraseña"
            value={password}
            onChange={(e) => onChange(e, "password")}
          />
        </label>
      </form>
      <div className={styles.buttons}>
        <button className="button button--black" onClick={(e) => onAccess(e)}>
          {button}
        </button>
      </div>
    </div>
  );
}

export default Credentials;
