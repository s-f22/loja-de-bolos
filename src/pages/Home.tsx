import { Header } from "../components/Header.tsx";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo à Loja de Bolos!</h1>
        <p>Delícias que derretem na boca 🍰</p>
      </main>
    </>
  );
};
