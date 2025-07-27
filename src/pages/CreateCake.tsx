import { Header } from "../components/Header";

export const CreateCake = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Cadastrar Novo Bolo</h2>
        <form className="mt-3">
          <div className="mb-3">
            <label className="form-label">Nome do Bolo</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Preço</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">URL da Imagem</label>
            <input type="url" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success">Cadastrar</button>
        </form>
      </div>
    </>
  );
};
