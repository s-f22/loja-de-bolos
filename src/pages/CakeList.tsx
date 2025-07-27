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
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Nossos Bolos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockCakes.map((cake) => (
            <div key={cake.id} className="border p-4 rounded shadow">
              <img src={cake.image} alt={cake.name} className="mb-2" />
              <h3 className="text-lg font-bold">{cake.name}</h3>
              <p>{cake.description}</p>
              <p className="font-semibold">R$ {cake.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
