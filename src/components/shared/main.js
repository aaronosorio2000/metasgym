function Main({ children }) {
  return (
    <>
      <sidenav>
        <a href="/list">Lista</a>
        <a href="/create">Crear</a>
      </sidenav>
      <main>{children}</main>
    </>
  );
}

export default Main;
