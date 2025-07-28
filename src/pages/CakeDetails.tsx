import axios from "axios";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Cake } from "../types/Cake";

export const CakeDetails = () => {
  const { id } = useParams();
  const [cake, setCake] = useState<Cake>();

  const getDataById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cakes/${id}`);
      setCake(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    }
  };

  useEffect(() => {
    getDataById();
  }, []);

  if (!cake) {
    return (
      <>
        <Header />
        <div className="container mt-4">Carregando...</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Detalhes do Bolo #{cake.id}</h2>

        {/* Galeria de imagens */}
        <div className="row mb-4">
          {cake.image.map((imgUrl, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <img
                src={imgUrl}
                alt={`Imagem ${index + 1} do ${cake.name}`}
                className="img-fluid rounded shadow-sm"
              />
            </div>
          ))}
        </div>

        <div className="" style={{ maxWidth: "600px" }}>
          <div className="card-body">
            <h5 className="card-title">{cake.name}</h5>
            <p className="card-text">{cake.description}</p>
            <p className="card-text"><strong>Preço:</strong> R$ {cake.price.toFixed(2)}</p>
            <p className="card-text"><strong>Peso:</strong> {cake.weight}g</p>
          </div>
        </div>
      </div>
    </>
  );
};
