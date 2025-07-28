import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import type { Cake } from "../types/Cake";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CakeList = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/cakes");
      setCakes(response.data);
    } catch (error) {
      console.error("Erro ao buscar os dados: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Nossos Bolos</h2>
        <div className="row">
          {
            cakes.map((cake) => (
              <div className="col-md-4 mb-4"
                key={cake.id}
                onClick={() => navigate(`/cakes/${cake.id}`)}>
                <div className="card">
                  <img src={cake.image} className="card-img-top" alt={cake.name} />
                  <div className="card-body">
                    <h5 className="card-title">{cake.name}</h5>
                    <p className="card-text">{cake.subtitle}</p>
                    <p className="card-text"><strong>R$ {cake.price.toFixed(2)}</strong></p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};
