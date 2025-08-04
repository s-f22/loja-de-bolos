import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("http://localhost:3000/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.accessToken);
      navigate("/cakes"); // redireciona após login
    } catch (err) {
      alert("Login inválido");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};
