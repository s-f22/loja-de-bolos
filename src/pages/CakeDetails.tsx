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
      const response = await axios.get(`http://localhost:3001/cakes/${id}`)
      setCake(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    }
  }

  useEffect(() => {
    getDataById();
    return () => {
    }
  }, [])

  
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
