import { Header } from "../components/Header";
import type { Cake } from "../types/Cake";

const mockCakes: Cake[] = [
  {
    id: 1,
    name: "Bolo de Chocolate",
    description: "Cobertura cremosa e recheio de brigadeiro.",
    price: 40.0,
    image: "https://guiadacozinha.com.br/wp-content/uploads/2009/01/bolo-de-chocolate-simples-768x619.jpg"
  }
];

export const CakeList = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Nossos Bolos</h2>
        <div className="row">
          {mockCakes.map((cake) => (
            <div className="col-md-4 mb-4" key={cake.id}>
              <div className="card">
                <img src={cake.image} className="card-img-top" alt={cake.name} />
                <div className="card-body">
                  <h5 className="card-title">{cake.name}</h5>
                  <p className="card-text">{cake.description}</p>
                  <p className="card-text"><strong>R$ {cake.price.toFixed(2)}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
