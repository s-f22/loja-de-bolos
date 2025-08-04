import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import interceptor from "../services/interceptor";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await interceptor.post("http://localhost:3000/login", {
        email,
        password,
      });

      // aguarde o contexto ser atualizado antes de redirecionar
      await new Promise((resolve) => {
        login(res.data.accessToken);
        setTimeout(resolve, 50); // tempo mínimo para o contexto propagar
      });

      navigate("/cakes");
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
