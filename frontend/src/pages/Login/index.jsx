import { Link } from "react-router-dom";
import { useState } from "react";
import loginIMG from "../../assets/login.png";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Faça seu Login!</span>

        <span className="login-form-title">
          <img src={loginIMG} alt="Img Login" />
        </span>

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
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-create">
          <span className="txt-1">Não possui conta?</span>
          <Link to="/register" className="txt-2">
            Criar Conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
