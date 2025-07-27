import { Header } from "../components/Header";
import { useParams } from "react-router-dom";

export const EditCake = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Editar Bolo #{id}</h2>
        <form className="mt-3">
          <div className="mb-3">
            <label className="form-label">Nome do Bolo</label>
            <input type="text" className="form-control" defaultValue="Bolo de Exemplo" />
          </div>
          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <input type="text" className="form-control" defaultValue="Descrição de exemplo" />
          </div>
          <div className="mb-3">
            <label className="form-label">Preço</label>
            <input type="number" className="form-control" defaultValue={50.0} />
          </div>
          <div className="mb-3">
            <label className="form-label">URL da Imagem</label>
            <input type="url" className="form-control" defaultValue="https://via.placeholder.com/150" />
          </div>
          <button type="submit" className="btn btn-primary">Salvar Alterações</button>
        </form>
      </div>
    </>
  );
};
