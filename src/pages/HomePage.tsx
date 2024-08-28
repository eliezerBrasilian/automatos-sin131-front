import { useNavigate } from "react-router-dom";
import "../App.css";
import { Rotas } from "../navigation/Rotas";

export function HomePage() {
  return (
    <div className="home-container ">
      <h1>SEJA-BEM VINDO AO MUNDO DOS AUTOMATOS</h1>
      <Menu />
    </div>
  );
}

function Menu() {
  const nav = useNavigate();

  return (
    <div className="menu-container">
      <li>Selecione a opção desejada para realizar a operação</li>
      <div className="btns-container">
        <button onClick={() => nav(Rotas.CREATE_AFN)}>Entrar com a AFN</button>
        <button onClick={() => nav(Rotas.CREATE_AFD)}>Entrar com a AFD</button>
      </div>
    </div>
  );
}
