import { Header } from "../components/Header";
import { useParams } from "react-router-dom";

export const EditCake = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Editar Bolo #{id}</h2>
        <form className="flex flex-col gap-4 max-w-md">
          <input type="text" placeholder="Nome do bolo" />
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Preço" />
          <input type="url" placeholder="URL da imagem" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Salvar</button>
        </form>
      </main>
    </>
  );
};
