import { Link } from "react-router-dom";
import "./historico.css";

export const Historico = () => {
  return (
    <div className="global-hist">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
      </style>
      <header className="header-hist">
        <h3>Pagina Inicial</h3>
        <h3>Linha do Tempo</h3>
        <h3>Sair</h3>
      </header>
      <div className="list-dashboard-hist">
        <div className="container-empresas-hist">
          <div className="list-empresas-hist">
            <li>Listagem Empresas</li>
            <ul>empresa 1</ul>
            <ul>empresa 2</ul>
            <ul>empresa 3</ul>
          </div>
        </div>
        <div className="dash-global">
          <div className="list-historico-hist">
            <div className="dashboard-hist">
              <h2>Linha do Tempo</h2>
            </div>
            <div className="list-empregados-hist">
              <li>
                {" "}
                Cod Empresa
                <ul>1</ul>
                <ul>2</ul>
                <ul>3</ul>
                <ul>4</ul>
              </li>
              <li>
                {" "}
                Nome Empregado
                <ul>Empregado 1</ul>
                <ul>Empregado 2</ul>
                <ul>Empregado 3</ul>
                <ul>Empregado 4</ul>
              </li>
              <li>
                {" "}
                Data Admissão
                <ul>Empregado 1</ul>
                <ul>Empregado 2</ul>
                <ul>Empregado 3</ul>
                <ul>Empregado 4</ul>
              </li>
              <li>
                {" "}
                Data Desligamento
                <ul>Empregado 1</ul>
                <ul>Empregado 2</ul>
                <ul>Empregado 3</ul>
                <ul>Empregado 4</ul>
              </li>
              <li>
                {" "}
                Data Ultima Ferias
                <ul>Empregado 1</ul>
                <ul>Empregado 2</ul>
                <ul>Empregado 3</ul>
                <ul>Empregado 4</ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
