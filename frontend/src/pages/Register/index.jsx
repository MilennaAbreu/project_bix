import { Link } from "react-router-dom";
import { useState } from "react";
import loginIMG from "../../assets/login.png";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Crie sua Conta</span>

        <span className="login-form-title">
          <img src={loginIMG} alt="Img Login" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-value input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-value input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-value input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Cadastrar</button>
        </div>

        <div className="text-create">
          <span className="txt-1">Já possui conta?</span>
          <Link to="/login" className="txt-2">
            Acessar Conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
