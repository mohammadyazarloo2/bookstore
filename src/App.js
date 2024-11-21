import "./App.css";
import Headers from "./components/Header";
import React from "react";
import { Outlet } from 'react-router-dom';

function App() {
  const [dark, setDark] = React.useState(false);

  function darkMode() {
    if (dark === false) {
      setDark(true);
    } else {
      setDark(false);
    }
  }

  return (
    <div className={dark === true ? "App dark" : "App"}>
      <Headers dark={dark} darkMode={darkMode} />
      <Outlet />
    </div>
  );
}

export default App;
