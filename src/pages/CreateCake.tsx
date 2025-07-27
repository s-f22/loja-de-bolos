import { Header } from "../components/Header";

export const CreateCake = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Bolo</h2>
        <form className="flex flex-col gap-4 max-w-md">
          <input type="text" placeholder="Nome do bolo" />
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Preço" />
          <input type="url" placeholder="URL da imagem" />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">Cadastrar</button>
        </form>
      </main>
    </>
  );
};
