import { Header } from "../components/Header";
import { useParams } from "react-router-dom";

export const CakeDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Detalhes do Bolo #{id}</h2>
        <p>[Conteúdo simulado - detalhes do bolo]</p>
      </main>
    </>
  );
};
