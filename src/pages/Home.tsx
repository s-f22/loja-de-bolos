import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1 className="display-4">Bem-vindo à Loja de Bolos!</h1>
        <p className="lead">Delícias que derretem na boca 🍰</p>
      </div>
    </>
  );
};
