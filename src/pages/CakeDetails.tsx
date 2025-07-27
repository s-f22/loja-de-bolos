import { Header } from "../components/Header";
import { useParams } from "react-router-dom";

export const CakeDetails = () => {
  const { id } = useParams();

  // Simulando dados
  const cake = {
    id,
    name: "Bolo de Morango",
    description: "Recheado com creme e morangos frescos.",
    price: 45.0,
    image: "https://guiadacozinha.com.br/wp-content/uploads/2009/01/bolo-de-chocolate-simples-768x619.jpg"
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Detalhes do Bolo #{cake.id}</h2>
        <div className="mt-3" style={{ maxWidth: "500px" }}>
          <img src={cake.image} className="card-img-top" alt={cake.name} />
          <div className="card-body">
            <h5 className="card-title">{cake.name}</h5>
            <p className="card-text">{cake.description}</p>
            <p className="card-text"><strong>Preço:</strong> R$ {cake.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
