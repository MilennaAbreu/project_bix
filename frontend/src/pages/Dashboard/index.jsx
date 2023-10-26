import { Link } from "react-router-dom";
import "./dashboard.css";
import { useEffect } from "react";

export const Dashboard = () => {
  return (
    <div className="global">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
      </style>
      <header className="header">
        <h3>Pagina Inicial</h3>
        <h3>Linha do Tempo</h3>
        <h3>Sair</h3>
      </header>
      <div className="list-dashboard">
        <div className="container-empresas">
          <div className="list-empresas">
            <li>Listagem Empresas</li>
            <ul>empresa 1</ul>
            <ul>empresa 2</ul>
            <ul>empresa 3</ul>
          </div>
        </div>
        <div className="dashboard">
          <h1>Insira aqui o dashboard</h1>
          <div className="list-empregados">
            <h1>Dados Empregados</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
